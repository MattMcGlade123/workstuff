/*
 * Copyright (c) 2017 American Express Travel Related Services Company, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

/* eslint-disable global-require */
const fs = require('fs');
const path = require('path');

describe('toMatchImageSnapshot', () => {
  function setupMock(diffImageToSnapshotResult, mockSupportsColor = true) {
    jest.doMock('../src/diff-snapshot', () => ({
      runDiffImageToSnapshot: jest.fn(() => diffImageToSnapshotResult),
    }));

    jest.mock('supports-color', () => ({
      // 1 means basic ANSI 16-color support, 0 means no support
      stdout: { level: mockSupportsColor ? 1 : 0 },
      stderr: { level: mockSupportsColor ? 1 : 0 },
    }));

    const mockFs = Object.assign({}, fs, {
      existsSync: jest.fn(),
      unlinkSync: jest.fn(),
    });
    mockFs.existsSync.mockImplementation(p => p === 'test/path');
    jest.mock('fs', () => mockFs);

    return {
      mockFs,
    };
  }

  beforeEach(() => {
    // In tests, skip reporting (skip snapshotState update to not mess with our test report)
    global.UNSTABLE_SKIP_REPORTING = true;
    jest.resetModules();
    jest.resetAllMocks();
  });

  afterEach(() => {
    jest.unmock('fs');
    jest.unmock('chalk');
  });

  it('should throw an error if used with .not matcher', () => {
    const mockDiffResult = {
      pass: true,
      diffOutputPath: 'path/to/result.png',
      diffRatio: 0,
      diffPixelCount: 0,
    };

    setupMock(mockDiffResult);
    const { toMatchImageSnapshot } = require('../src/index');
    expect.extend({ toMatchImageSnapshot });

    expect(() => expect('pretendthisisanimagebuffer').not.toMatchImageSnapshot())
      .toThrowErrorMatchingSnapshot();
  });

  it('should pass when snapshot is similar enough or same as baseline snapshot', () => {
    const mockDiffResult = {
      pass: true,
      diffOutputPath: 'path/to/result.png',
      diffRatio: 0,
      diffPixelCount: 0,
    };
    setupMock(mockDiffResult);

    const { toMatchImageSnapshot } = require('../src/index');
    expect.extend({ toMatchImageSnapshot });

    expect(() => expect('pretendthisisanimagebuffer').toMatchImageSnapshot())
      .not.toThrow();
  });

  it('should fail when snapshot has a difference beyond allowed threshold', () => {
    const mockDiffResult = {
      pass: false,
      diffOutputPath: 'path/to/result.png',
      diffRatio: 0.8,
      diffPixelCount: 600,
    };

    setupMock(mockDiffResult);
    const { toMatchImageSnapshot } = require('../src/index');
    expect.extend({ toMatchImageSnapshot });

    expect(() => expect('pretendthisisanimagebuffer').toMatchImageSnapshot())
      .toThrowErrorMatchingSnapshot();
  });

  it('should fail when snapshot is a different size than the baseline', () => {
    const mockDiffResult = {
      pass: false,
      diffSize: true,
      imageDimensions: {
        receivedHeight: 100,
        receivedWidth: 100,
        baselineHeight: 10,
        baselineWidth: 10,
      },
      diffOutputPath: 'path/to/result.png',
      diffRatio: 0.8,
      diffPixelCount: 600,
    };

    setupMock(mockDiffResult);
    const { toMatchImageSnapshot } = require('../src/index');
    expect.extend({ toMatchImageSnapshot });

    expect(() => expect('pretendthisisanimagebuffer').toMatchImageSnapshot())
      .toThrow(/Expected image to be the same size as the snapshot/);
  });

  it('should use noColors options if passed as true and not style error message', () => {
    const mockDiffResult = {
      pass: false,
      diffOutputPath: 'path/to/result.png',
      diffRatio: 0.4,
      diffPixelCount: 600,
    };

    setupMock(mockDiffResult);
    const { toMatchImageSnapshot } = require('../src/index');
    expect.extend({ toMatchImageSnapshot });

    expect(() => expect('pretendthisisanimagebuffer').toMatchImageSnapshot({ noColors: true }))
      .toThrowErrorMatchingSnapshot();
  });

  it('should use noColors options if passed as false and style error message', () => {
    const mockDiffResult = {
      pass: false,
      diffOutputPath: 'path/to/result.png',
      diffRatio: 0.4,
      diffPixelCount: 600,
    };
    const mockSupportsColor = false;

    setupMock(mockDiffResult, mockSupportsColor);
    const { toMatchImageSnapshot } = require('../src/index');
    expect.extend({ toMatchImageSnapshot });

    expect(() => expect('pretendthisisanimagebuffer').toMatchImageSnapshot({ noColors: false }))
      .toThrowErrorMatchingSnapshot();
  });

  it('should not style error message if colors not supported ', () => {
    const mockDiffResult = {
      pass: false,
      diffOutputPath: 'path/to/result.png',
      diffRatio: 0.4,
      diffPixelCount: 600,
    };
    const mockSupportsColor = false;

    setupMock(mockDiffResult, mockSupportsColor);
    const { toMatchImageSnapshot } = require('../src/index');
    expect.extend({ toMatchImageSnapshot });

    expect(() => expect('pretendthisisanimagebuffer').toMatchImageSnapshot())
      .toThrowErrorMatchingSnapshot();
  });

  it('should style error message if colors supported ', () => {
    const mockDiffResult = {
      pass: false,
      diffOutputPath: 'path/to/result.png',
      diffRatio: 0.4,
      diffPixelCount: 600,
    };

    setupMock(mockDiffResult);
    const { toMatchImageSnapshot } = require('../src/index');
    expect.extend({ toMatchImageSnapshot });

    expect(() => expect('pretendthisisanimagebuffer').toMatchImageSnapshot())
      .toThrowErrorMatchingSnapshot();
  });

  it('should use custom pixelmatch configuration if passed in', () => {
    const mockTestContext = {
      testPath: 'path/to/test.spec.js',
      currentTestName: 'test1',
      isNot: false,
      snapshotState: {
        _counters: new Map(),
        _updateSnapshot: 'new',
        updated: undefined,
        added: true,
      },
    };

    const mockDiffResult = {
      pass: false,
      diffOutputPath: 'path/to/result.png',
      diffRatio: 0.8,
      diffPixelCount: 600,
    };

    setupMock(mockDiffResult);
    const { toMatchImageSnapshot } = require('../src/index');
    const matcherAtTest = toMatchImageSnapshot.bind(mockTestContext);

    const customDiffConfig = { threshold: 0.3 };
    matcherAtTest('pretendthisisanimagebuffer', { customDiffConfig });
    const { runDiffImageToSnapshot } = require('../src/diff-snapshot');
    expect(runDiffImageToSnapshot.mock.calls[0][0].customDiffConfig).toEqual(customDiffConfig);
  });

  it('passes diffImageToSnapshot everything it needs to create a snapshot and compare if needed', () => {
    const mockTestContext = {
      testPath: 'path/to/test.spec.js',
      currentTestName: 'test',
      isNot: false,
      snapshotState: {
        _counters: new Map(),
        _updateSnapshot: 'new',
        updated: undefined,
        added: true,
      },
    };

    const mockDiffResult = {
      pass: false,
      diffOutputPath: 'path/to/result.png',
      diffRatio: 0.8,
      diffPixelCount: 600,
    };

    setupMock(mockDiffResult);
    const { toMatchImageSnapshot } = require('../src/index');
    const matcherAtTest = toMatchImageSnapshot.bind(mockTestContext);

    matcherAtTest('pretendthisisanimagebuffer');
    const { runDiffImageToSnapshot } = require('../src/diff-snapshot');

    const dataArg = runDiffImageToSnapshot.mock.calls[0][0];
    // This is to make the test work on windows
    dataArg.snapshotsDir = dataArg.snapshotsDir.replace(/\\/g, '/');

    expect(dataArg).toMatchSnapshot();
  });

  it('passes uses user passed snapshot name if given', () => {
    const mockTestContext = {
      testPath: 'path/to/test.spec.js',
      currentTestName: 'test',
      isNot: false,
      snapshotState: {
        _counters: new Map(),
        _updateSnapshot: 'new',
        updated: undefined,
        added: true,
      },
    };

    const mockDiffResult = {
      pass: false,
      diffOutputPath: 'path/to/result.png',
      diffRatio: 0.8,
      diffPixelCount: 600,
    };

    setupMock(mockDiffResult);
    const { toMatchImageSnapshot } = require('../src/index');
    const matcherAtTest = toMatchImageSnapshot.bind(mockTestContext);

    matcherAtTest('pretendthisisanimagebuffer', { customSnapshotIdentifier: 'custom-name' });
    const { runDiffImageToSnapshot } = require('../src/diff-snapshot');

    expect(runDiffImageToSnapshot.mock.calls[0][0].snapshotIdentifier).toBe('custom-name');

    matcherAtTest('pretendthisisanimagebuffer', { customSnapshotIdentifier: () => 'functional-name' });
    expect(runDiffImageToSnapshot.mock.calls[1][0].snapshotIdentifier).toBe('functional-name');

    matcherAtTest('pretendthisisanimagebuffer', { customSnapshotIdentifier: () => '' });
    expect(runDiffImageToSnapshot.mock.calls[2][0].snapshotIdentifier).toBe('test-spec-js-test-3');

    const mockCustomSnap = jest.fn();
    matcherAtTest('pretendthisisanimagebuffer', { customSnapshotIdentifier: mockCustomSnap });

    expect(mockCustomSnap).toHaveBeenCalledWith({
      testPath: mockTestContext.testPath,
      currentTestName: mockTestContext.currentTestName,
      counter: 4,
      defaultIdentifier: 'test-spec-js-test-4',
    });
  });

  it('attempts to update snapshots if snapshotState has updateSnapshot flag set', () => {
    const mockTestContext = {
      testPath: 'path/to/test.spec.js',
      currentTestName: 'test1',
      isNot: false,
      snapshotState: {
        _counters: new Map(),
        _updateSnapshot: 'all',
        updated: undefined,
        added: true,
      },
    };
    const mockDiffResult = { updated: true };

    setupMock(mockDiffResult);
    const { toMatchImageSnapshot } = require('../src/index');
    const matcherAtTest = toMatchImageSnapshot.bind(mockTestContext);

    matcherAtTest('pretendthisisanimagebuffer');
    const { runDiffImageToSnapshot } = require('../src/diff-snapshot');

    expect(runDiffImageToSnapshot.mock.calls[0][0].updateSnapshot).toBe(true);
  });

  it('should work when a new snapshot is added', () => {
    const mockTestContext = {
      testPath: 'path/to/test.spec.js',
      currentTestName: 'test1',
      isNot: false,
      snapshotState: {
        _counters: new Map(),
        update: false,
        _updateSnapshot: 'new',
        updated: undefined,
        added: true,
      },
    };
    const mockDiff = jest.fn();
    jest.doMock('../src/diff-snapshot', () => ({
      runDiffImageToSnapshot: mockDiff,
    }));

    const mockFs = Object.assign({}, fs, {
      existsSync: jest.fn(),
      unlinkSync: jest.fn(),
    });

    mockFs.existsSync.mockReturnValueOnce(false);
    mockDiff.mockReturnValueOnce({ added: true });

    const { toMatchImageSnapshot } = require('../src/index');
    const matcherAtTest = toMatchImageSnapshot.bind(mockTestContext);
    expect(matcherAtTest('pretendthisisanimagebuffer')).toHaveProperty('pass', true);
    expect(mockDiff).toHaveBeenCalled();
  });

  it('should fail when a new snapshot is added in ci', () => {
    const mockTestContext = {
      testPath: 'path/to/test.spec.js',
      currentTestName: 'test1',
      isNot: false,
      snapshotState: {
        _counters: new Map(),
        update: false,
        _updateSnapshot: 'none',
        updated: undefined,
        added: true,
      },
    };

    const mockDiff = jest.fn();
    jest.doMock('../src/diff-snapshot', () => ({
      diffImageToSnapshot: mockDiff,
    }));

    const mockFs = Object.assign({}, fs, {
      existsSync: jest.fn(),
      unlinkSync: jest.fn(),
    });

    mockFs.existsSync.mockReturnValueOnce(false);


    const { toMatchImageSnapshot } = require('../src/index');
    const matcherAtTest = toMatchImageSnapshot.bind(mockTestContext);
    const result = matcherAtTest('pretendthisisanimagebuffer');
    expect(result).toHaveProperty('pass', false);
    expect(result).toHaveProperty('message');
    expect(result.message()).toContain('continuous integration');
    expect(mockDiff).not.toHaveBeenCalled();
  });

  it('should work when a snapshot is updated', () => {
    const mockTestContext = {
      testPath: 'path/to/test.spec.js',
      currentTestName: 'test1',
      isNot: false,
      snapshotState: {
        _counters: new Map(),
        update: true,
        updated: undefined,
        added: undefined,
      },
    };
    const mockDiffResult = { updated: true };

    setupMock(mockDiffResult);
    const { toMatchImageSnapshot } = require('../src/index');
    const matcherAtTest = toMatchImageSnapshot.bind(mockTestContext);
    expect(() => matcherAtTest('pretendthisisanimagebuffer')).not.toThrow();
  });

  it('should pass with defaults', () => {
    const mockTestContext = {
      testPath: path.join('path', 'to', 'test.spec.js'),
      currentTestName: 'test1',
      isNot: false,
      snapshotState: {
        _counters: new Map(),
        update: true,
        updated: undefined,
        added: undefined,
      },
    };
    setupMock({ updated: true });

    const runDiffImageToSnapshot = jest.fn(() => ({}));
    jest.doMock('../src/diff-snapshot', () => ({
      runDiffImageToSnapshot,
    }));

    const Chalk = require('chalk').Instance;
    jest.mock('chalk');
    const { toMatchImageSnapshot } = require('../src/index');
    const matcherAtTest = toMatchImageSnapshot.bind(mockTestContext);

    matcherAtTest();

    expect(runDiffImageToSnapshot).toHaveBeenCalledWith({
      allowSizeMismatch: false,
      blur: 0,
      comparisonMethod: 'pixelmatch',
      customDiffConfig: {},
      diffDirection: 'horizontal',
      failureThreshold: 0,
      failureThresholdType: 'pixel',
      receivedImageBuffer: undefined,
      snapshotIdentifier: 'test-spec-js-test-1-1-snap',
      snapshotsDir: 'path/to/__image_snapshots__',
      storeReceivedOnFailure: false,
      updatePassedSnapshot: false,
      updateSnapshot: false,
    });
    expect(Chalk).toHaveBeenCalledWith({});
  });

  it('can provide custom defaults', () => {
    const mockTestContext = {
      testPath: path.join('path', 'to', 'test.spec.js'),
      currentTestName: 'test1',
      isNot: false,
      snapshotState: {
        _counters: new Map(),
        update: true,
        updated: undefined,
        added: undefined,
      },
    };
    setupMock({ updated: true });

    const runDiffImageToSnapshot = jest.fn(() => ({}));
    jest.doMock('../src/diff-snapshot', () => ({
      runDiffImageToSnapshot,
    }));

    const Chalk = require('chalk').Instance;
    jest.mock('chalk');
    const { configureToMatchImageSnapshot } = require('../src/index');
    const customDiffConfig = { perceptual: true };
    const customSnapshotIdentifier = ({ defaultIdentifier }) =>
      `custom-${defaultIdentifier}`;
    const comparisonMethod = 'ssim';
    const toMatchImageSnapshot = configureToMatchImageSnapshot({
      customDiffConfig,
      customSnapshotIdentifier,
      customSnapshotsDir: path.join('path', 'to', 'my-custom-snapshots-dir'),
      customReceivedDir: path.join('path', 'to', 'my-custom-received-dir'),
      storeReceivedOnFailure: true,
      customDiffDir: path.join('path', 'to', 'my-custom-diff-dir'),
      diffDirection: 'vertical',
      noColors: true,
      failureThreshold: 1,
      failureThresholdType: 'percent',
      updatePassedSnapshot: true,
      blur: 1,
      comparisonMethod,
    });
    expect.extend({ toMatchImageSnapshot });
    const matcherAtTest = toMatchImageSnapshot.bind(mockTestContext);

    matcherAtTest();

    expect(runDiffImageToSnapshot).toHaveBeenCalledWith({
      allowSizeMismatch: false,
      blur: 1,
      customDiffConfig: {
        perceptual: true,
      },
      snapshotIdentifier: 'custom-test-spec-js-test-1-1',
      snapshotsDir: path.join('path', 'to', 'my-custom-snapshots-dir'),
      receivedDir: path.join('path', 'to', 'my-custom-received-dir'),
      storeReceivedOnFailure: true,
      diffDir: path.join('path', 'to', 'my-custom-diff-dir'),
      diffDirection: 'vertical',
      updateSnapshot: false,
      updatePassedSnapshot: true,
      failureThreshold: 1,
      failureThresholdType: 'percent',
      comparisonMethod,
    });
    expect(Chalk).toHaveBeenCalledWith({
      level: 0, // noColors
    });
  });

  it('can run in process', () => {
    const mockTestContext = {
      testPath: path.join('path', 'to', 'test.spec.js'),
      currentTestName: 'test1',
      isNot: false,
      snapshotState: {
        _counters: new Map(),
        update: true,
        updated: undefined,
        added: undefined,
      },
    };
    setupMock({ updated: true });

    const diffImageToSnapshot = jest.fn(() => ({}));
    jest.doMock('../src/diff-snapshot', () => ({
      diffImageToSnapshot,
    }));

    const Chalk = require('chalk').Instance;
    jest.mock('chalk');
    const { configureToMatchImageSnapshot } = require('../src/index');
    const customConfig = { perceptual: true };
    const toMatchImageSnapshot = configureToMatchImageSnapshot({
      customDiffConfig: customConfig,
      customSnapshotsDir: path.join('path', 'to', 'my-custom-snapshots-dir'),
      customReceivedDir: path.join('path', 'to', 'my-custom-received-dir'),
      customDiffDir: path.join('path', 'to', 'my-custom-diff-dir'),
      storeReceivedOnFailure: true,
      noColors: true,
      runInProcess: true,
    });
    expect.extend({ toMatchImageSnapshot });
    const matcherAtTest = toMatchImageSnapshot.bind(mockTestContext);

    matcherAtTest();

    expect(diffImageToSnapshot).toHaveBeenCalledWith({
      allowSizeMismatch: false,
      blur: 0,
      customDiffConfig: {
        perceptual: true,
      },
      snapshotIdentifier: 'test-spec-js-test-1-1-snap',
      snapshotsDir: path.join('path', 'to', 'my-custom-snapshots-dir'),
      receivedDir: path.join('path', 'to', 'my-custom-received-dir'),
      diffDir: path.join('path', 'to', 'my-custom-diff-dir'),
      diffDirection: 'horizontal',
      storeReceivedOnFailure: true,
      updateSnapshot: false,
      updatePassedSnapshot: false,
      failureThreshold: 0,
      failureThresholdType: 'pixel',
      comparisonMethod: 'pixelmatch',
    });
    expect(Chalk).toHaveBeenCalledWith({
      level: 0, // noColors
    });
  });

  it('should only increment matched when test passed', () => {
    global.UNSTABLE_SKIP_REPORTING = false;

    const mockTestContext = {
      testPath: 'path/to/test.spec.js',
      currentTestName: 'test',
      isNot: false,
      snapshotState: {
        _counters: new Map(),
        _updateSnapshot: 'new',
        updated: undefined,
        added: true,
        unmatched: 0,
        matched: 0,
      },
    };

    const mockDiffResult = {
      pass: true,
      diffOutputPath: 'path/to/result.png',
      diffRatio: 0,
      diffPixelCount: 0,
    };

    setupMock(mockDiffResult);
    const { toMatchImageSnapshot } = require('../src/index');
    const matcherAtTest = toMatchImageSnapshot.bind(mockTestContext);

    matcherAtTest('pretendthisisanimagebuffer', { customSnapshotIdentifier: 'custom-name' });
    matcherAtTest('pretendthisisanimagebuffer', { customSnapshotIdentifier: 'custom-name' });
    matcherAtTest('pretendthisisanimagebuffer', { customSnapshotIdentifier: 'custom-name' });
    matcherAtTest('pretendthisisanimagebuffer', { customSnapshotIdentifier: 'custom-name' });
    expect(mockTestContext.snapshotState.matched).toBe(4);
  });

  describe('when retryTimes is set', () => {
    beforeEach(() => { global[Symbol.for('RETRY_TIMES')] = 3; });
    afterEach(() => { global[Symbol.for('RETRY_TIMES')] = undefined; });

    it('should throw an error when called without customSnapshotIdentifier', () => {
      const mockDiffResult = {
        pass: true,
        diffOutputPath: 'path/to/result.png',
        diffRatio: 0,
        diffPixelCount: 0,
      };

      setupMock(mockDiffResult);
      const { toMatchImageSnapshot } = require('../src/index');
      expect.extend({ toMatchImageSnapshot });

      expect(() => expect('pretendthisisanimagebuffer').toMatchImageSnapshot())
        .toThrowErrorMatchingSnapshot();

      expect(() => expect('pretendthisisanimagebuffer').toMatchImageSnapshot({ customSnapshotIdentifier: () => '' }))
        .toThrowErrorMatchingSnapshot();
    });

    it('should only increment unmatched when test fails in excess of retryTimes', () => {
      global.UNSTABLE_SKIP_REPORTING = false;

      const mockTestContext = {
        testPath: 'path/to/test.spec.js',
        currentTestName: 'test',
        isNot: false,
        snapshotState: {
          _counters: new Map(),
          _updateSnapshot: 'new',
          updated: undefined,
          added: true,
          unmatched: 0,
        },
      };

      const mockDiffResult = {
        pass: false,
        diffOutputPath: 'path/to/result.png',
        diffRatio: 0.8,
        diffPixelCount: 600,
      };

      setupMock(mockDiffResult);
      const { toMatchImageSnapshot } = require('../src/index');
      const matcherAtTest = toMatchImageSnapshot.bind(mockTestContext);

      matcherAtTest('pretendthisisanimagebuffer', { customSnapshotIdentifier: 'custom-name' });
      matcherAtTest('pretendthisisanimagebuffer', { customSnapshotIdentifier: 'custom-name' });
      matcherAtTest('pretendthisisanimagebuffer', { customSnapshotIdentifier: 'custom-name' });
      matcherAtTest('pretendthisisanimagebuffer', { customSnapshotIdentifier: 'custom-name' });
      expect(mockTestContext.snapshotState.unmatched).toBe(1);
    });
  });
  describe('dumpDiffToConsole', () => {
    it('imgSrcString is added to console message when dumpDiffToConsole is true', () => {
      const mockDiffResult = {
        pass: false,
        diffOutputPath: 'path/to/result.png',
        diffRatio: 0.8,
        diffPixelCount: 600,
        imgSrcString: 'pretendthisisanimagebase64string',
      };

      setupMock(mockDiffResult);
      const { toMatchImageSnapshot } = require('../src/index');
      expect.extend({ toMatchImageSnapshot });

      expect(() => expect('pretendthisisanimagebuffer').toMatchImageSnapshot({ dumpDiffToConsole: true }))
        .toThrowErrorMatchingSnapshot();
    });

    it('imgSrcString is not added to console by default', () => {
      const mockDiffResult = {
        pass: false,
        diffOutputPath: 'path/to/result.png',
        diffRatio: 0,
        diffPixelCount: 0,
        imgSrcString: 'pretendthisisanimagebase64string',
      };

      setupMock(mockDiffResult);
      const { toMatchImageSnapshot } = require('../src/index');
      expect.extend({ toMatchImageSnapshot });

      expect(() => expect('pretendthisisanimagebuffer').toMatchImageSnapshot())
        .toThrowErrorMatchingSnapshot();
    });
  });

  describe('dumpInlineDiffToConsole', () => {
    const { TERM_PROGRAM } = process.env;

    afterEach(() => { process.env.TERM_PROGRAM = TERM_PROGRAM; });

    it('falls back to dumpDiffToConsole if the terminal is unsupported', () => {
      const mockDiffResult = {
        pass: false,
        diffOutputPath: 'path/to/result.png',
        diffRatio: 0.8,
        diffPixelCount: 600,
        imgSrcString: 'pretendthisisanimagebase64string',
      };
      setupMock(mockDiffResult);
      const { toMatchImageSnapshot } = require('../src/index');
      expect.extend({ toMatchImageSnapshot });

      process.env.TERM_PROGRAM = 'xterm';

      expect(() => expect('pretendthisisanimagebuffer').toMatchImageSnapshot({ dumpInlineDiffToConsole: true }))
        .toThrowErrorMatchingSnapshot();
    });

    it('uses Inline Image Protocol in iTerm', () => {
      const mockDiffResult = {
        pass: false,
        diffOutputPath: 'path/to/result.png',
        diffRatio: 0.8,
        diffPixelCount: 600,
        imgSrcString: 'pretendthisisanimagebase64string',
        imageDimensions: {
          receivedHeight: 100,
          receivedWidth: 200,
        },
      };
      setupMock(mockDiffResult);
      const { toMatchImageSnapshot } = require('../src/index');
      expect.extend({ toMatchImageSnapshot });

      process.env.TERM_PROGRAM = 'iTerm.app';

      expect(() => expect('pretendthisisanimagebuffer').toMatchImageSnapshot({ dumpInlineDiffToConsole: true }))
        .toThrowErrorMatchingSnapshot();
    });

    it('uses Inline Image Protocol when ENABLE_INLINE_DIFF is set', () => {
      const mockDiffResult = {
        pass: false,
        diffOutputPath: 'path/to/result.png',
        diffRatio: 0.8,
        diffPixelCount: 600,
        imgSrcString: 'pretendthisisanimagebase64string',
        imageDimensions: {
          receivedHeight: 100,
          receivedWidth: 200,
        },
      };
      setupMock(mockDiffResult);
      const { toMatchImageSnapshot } = require('../src/index');
      expect.extend({ toMatchImageSnapshot });

      process.env.ENABLE_INLINE_DIFF = true;

      expect(() => expect('pretendthisisanimagebuffer').toMatchImageSnapshot({ dumpInlineDiffToConsole: true }))
        .toThrowErrorMatchingSnapshot();
    });
  });
});

describe('updateSnapshotState', () => {
  it('mutates original state', () => {
    const { updateSnapshotState } = require('../src/index');
    global.UNSTABLE_SKIP_REPORTING = false;
    const originalState = { some: 'value' };
    updateSnapshotState(originalState, { another: 'val' });

    expect(originalState).toEqual({ some: 'value', another: 'val' });
  });
});
