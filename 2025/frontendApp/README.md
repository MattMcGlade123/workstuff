## Getting Started

To begin, clone the project. Once cloned, you need to install all the dependencies for the site. To do this you need to have `Yarn` and `Node v20.9.0` installed and in the root level run.

`yarn`

## Unit Testing

We use [React Testing Library](https://testing-library.com/) to unit test our components.

To Run the test suite, use the command `yarn test` at the root. This will run test on all test in every package.

If creating a new test for a component, add a file at the root of the component folder named `[ComponentName].test.{js|tsx}`. After writing the tests withing this file, you can run `yarn test` and the test suite will pick up your new component tests and run them alongside the rest.


## Tools

This package uses the following tools

NextJs
Redux Toolkit
Jest
React Testing Library
Styled components

I've also used a number of linting packages to help maintain the code quality