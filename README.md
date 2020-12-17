# Cypress and vue-testing-library

Test execution time comparison of Cypress and vue-testing-library.

<img width="1485" alt="Screen Shot 2020-12-17 at 15 50 39" src="https://user-images.githubusercontent.com/1491961/102453638-f62b7700-407f-11eb-9d14-4e4af296dcb1.png">

## Setup

```bash
# Install dependencies
$ npm ci
```

## Run Cypress Testing

```bash
$ npm run dev
$ npm run cypress
```

If you want to measure the test execution time:

```bash
$ npm run dev

# Duplicate test files (This will add 50 tests)
$ npm run bulk

# Run testing and output the execution time
$ npm run cypress:measure
```

## Run vue-testing-library testing

```bash
$ npm t
```

If you want to measure the test execution time:

```bash
# Duplicate test files (This will add 50 tests)
$ npm run bulk

# Run testing and output the execution time
$ npm run test:measure
```

## Measurement result

This is the result of the execution time for 51 test files on my laptop. It depends on the environment, so just for reference.

| -              | Cypress `run` (\*) | Cypress `open`                       | vue-testing-library |
| -------------- | ------------------ | ------------------------------------ | ------------------- |
| Execution time | 119s               | 53s (Excluding Cypress startup time) | 14s                 |

\* `cypress run --config video=false`

My laptop is:

- MacBook Pro (13-inch, 2019)
- 2.8 GHz Quad-Core Intel Core i7
- 16 GB 2133 MHz LPDDR3

You can see the reason why "run" is much slower than "open" from the following link.<br>
["run" is much slower than "open" · Issue #2912 · cypress-io/cypress](https://github.com/cypress-io/cypress/issues/2912)
