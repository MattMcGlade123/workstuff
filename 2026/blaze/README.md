# CSR

Rebuild of the old csr-frontend project

## Prerequisites

- **Node.js** — version in [`.nvmrc`](.nvmrc) (currently 24). Use `nvm use` or install that version another way.
- **Yarn** — you do **not** need to install Yarn globally. This repo pins the version in [`package.json`](package.json) (`packageManager`). Enable [Corepack](https://nodejs.org/api/corepack.html) (included with Node 16.10+) once per machine:

  ```bash
  corepack enable
  ```

  After that, the `yarn` command uses Yarn 4 as specified by the project. New clones: run `corepack enable` before `yarn install` if `yarn` is not found or the wrong version runs.

## Run locally (dev with hot reload)

```bash
nvm use
corepack enable
yarn install
cp .env.example .env.local
yarn dev
```

Open http://localhost:3000 — edits to components/pages will hot reload.

## Lint

ESLint runs against `app/` and `shared/` (see the `lint` script in [`package.json`](package.json)).

```bash
yarn lint
```

To apply auto-fixes where ESLint supports them:

```bash
yarn lint:fix
```

## Tests

Jest uses [`jest.config.mjs`](jest.config.mjs) (including coverage for `app/` and `shared/`).

Run the suite with coverage:

```bash
yarn test
```

Watch mode while developing:

```bash
yarn test:watch
```

Run test with coverage flag:

```bash
yarn test --coverage
```

## Prettier

Run Prettier formatting on the code.

```bash
yarn format
```

## GraphQL codegen

When you change GraphQL operations or the schema configuration, regenerate types and the client from [`codegen.yml`](codegen.yml):

```bash
yarn generate-main
```

## Build static (for deploy / preview)

```bash
yarn build
yarn start
```
