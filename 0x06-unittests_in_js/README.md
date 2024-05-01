# Unit Testing in JavaScript with Mocha, Chai, and Sinon

This project explores unit testing practices in JavaScript using Mocha, Chai, and Sinon libraries. The project covers various testing scenarios and techniques, including basic assertion testing, behavior-driven development, spies, stubs, hooks, async testing, skipping tests, and integration testing.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Project Structure](#project-structure)
4. [Tasks Overview](#tasks-overview)
5. [Dependencies](#dependencies)
6. [Contributing](#contributing)
7. [License](#license)

## Installation

1. Clone the repository:

```
git clone <repository_url>
```

2. Navigate to the project directory:

```
cd 0x06-unittests_in_js
```

3. Install dependencies:

```
npm install
```

## Usage

To run the tests for a specific task, use the following command:

```
npm test <task_filename.test.js>
```

For example:

```
npm test 0-calcul.test.js
```

## Project Structure

The project directory structure is as follows:

```
0x06-unittests_in_js/
│
├── 0-calcul.js
├── 0-calcul.test.js
├── 1-calcul.js
├── 1-calcul.test.js
├── 2-calcul_chai.js
├── 2-calcul_chai.test.js
├── 3-payment.js
├── 3-payment.test.js
├── 4-payment.js
├── 4-payment.test.js
├── 5-payment.js
├── 5-payment.test.js
├── 6-payment_token.js
├── 6-payment_token.test.js
├── 7-skip.test.js
├── 8-api/
│   ├── api.js
│   ├── api.test.js
│   └── package.json
├── 9-api/
│   ├── api.js
│   ├── api.test.js
│   └── package.json
├── 10-api/
│   ├── api.js
│   ├── api.test.js
│   └── package.json
├── utils.js
├── package.json
└── README.md
```

## Tasks Overview

- **Task 0:** Basic test with Mocha and Node assertion library
- **Task 1:** Combining descriptions
- **Task 2:** Basic test using Chai assertion library
- **Task 3:** Spies
- **Task 4:** Stubs
- **Task 5:** Hooks
- **Task 6:** Async tests with done
- **Task 7:** Skip
- **Task 8:** Basic Integration testing
- **Task 9:** Regex integration testing
- **Task 10:** Deep equality & Post integration testing

## Dependencies

- [Mocha](https://mochajs.org/): Test framework
- [Chai](https://www.chaijs.com/): Assertion library
- [Sinon](https://sinonjs.org/): Test spies, stubs, and mocks

## Contributing

Contributions are welcome! Please feel free to open a pull request or submit an issue if you find any bugs or want to suggest improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
