# CSR Frontend Version 2 – Tech Stack

---

## Core Framework & Runtime

| Technology     | Version | Purpose                                                                                                                |
| -------------- | ------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Next.js**    | 15.1.0  | React framework, routing, static export                                                                                |
| **React**      | ^19.0.0 | UI library                                                                                                             |
| **React DOM**  | ^19.0.0 | DOM rendering                                                                                                          |
| **TypeScript** | ^5      | Type safety                                                                                                            |
| **nuqs**       | ^2.8.9  | Type-safe URL search params as React state (`useQueryState`, etc.); App Router wired with `NuqsAdapter` in root layout |

---

## Styling

| Package                    | Version | Purpose                                                                                                       |
| -------------------------- | ------- | ------------------------------------------------------------------------------------------------------------- |
| **PostCSS**                | ^8.5.8  | CSS pipeline for Next.js                                                                                      |
| **postcss-preset-mantine** | ^1.18.0 | Mantine mixins, breakpoints, and style helpers ([PostCSS preset](https://mantine.dev/styles/postcss-preset/)) |
| **postcss-simple-vars**    | ^7.0.1  | Breakpoint variables for `postcss-preset-mantine`                                                             |

---

## UI Components ([Mantine](https://mantine.dev/))

Component library and hooks: [mantine.dev](https://mantine.dev/) — docs, theming, and [Next.js guide](https://mantine.dev/guides/next/).

| Package            | Version | Purpose                                              |
| ------------------ | ------- | ---------------------------------------------------- |
| **@mantine/core**  | ^9.0.0  | Components (inputs, buttons, overlays, layout, etc.) |
| **@mantine/hooks** | ^9.0.0  | Shared React hooks (state, browser APIs, utilities)  |

---

## Data & API

| Area        | Purpose                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **GraphQL** | Ticket and customer data from the backend GraphQL API. The browser client uses **graphql-request** against `NEXT_PUBLIC_GRAPHQL_ENDPOINT`; add headers (for example `x-api-key`) if the gateway requires them. Operation types and a typed SDK are produced with **GraphQL Codegen** from the schema under `shared/graphql/` and `.graphql` documents (replace the placeholder schema or point codegen at the real schema when it exists). |

---

## Dev / Build Tooling

| Package                | Version | Purpose                       |
| ---------------------- | ------- | ----------------------------- |
| **ESLint**             | ^9      | Linting                       |
| **eslint-config-next** | 15.1.0  | Next.js ESLint rules          |
| **@eslint/eslintrc**   | ^3      | ESLint backward compatibility |
| **@types/node**        | ^20     | Node.js type definitions      |
| **@types/react**       | ^19     | React type definitions        |
| **@types/react-dom**   | ^19     | React DOM type definitions    |

---

## Configuration Notes

- **Mantine**: Global styles from `@mantine/core/styles.css`; root `app/layout.tsx` uses `ColorSchemeScript`, `mantineHtmlProps` on `<html>`, and `MantineProvider` wrapping the app (see [Usage with Next.js — App Router](https://mantine.dev/guides/next/)). `postcss.config.cjs` at repo root enables `postcss-preset-mantine`. `next.config.ts` sets `experimental.optimizePackageImports` for `@mantine/core` and `@mantine/hooks` (tree-shaking). Some compound APIs still need `"use client"` or `ComponentTarget`/`ComponentDropdown`-style imports in server component files — see [Mantine + server components](https://help.mantine.dev/q/server-components).
- **nuqs**: Import adapter from `nuqs/adapters/next/app`; use hooks only in client components (`"use client"`).
- **Output**: Static export (`output: 'export'`) – generates static HTML/CSS/JS in `out/`
- **Preview**: Use `npx serve out` to preview the static export locally
- **Web view**: Layout (header, main, footer) and touch-friendly inputs are suitable for New Store POS (e.g. iPad web view)
