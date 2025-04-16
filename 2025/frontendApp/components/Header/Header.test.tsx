import React from 'react';

import { render } from '../../utils/test-utils';
import HeaderStructure from './HeaderStructure';

describe('HeaderStructure', () => {
  test('HeaderStructure to render with all components', async () => {
    const { getByTestId, getByText } = render(<HeaderStructure />);

    const header = getByTestId('header');
    const title = getByText('Awesome product site');
    expect(header).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});