# NodeJS Basics

This project covers various aspects of Node.js development, including back-end development, JavaScript programming, ES6 features, and working with frameworks like Express.js. It consists of several tasks aimed at building fundamental skills in Node.js development.

## Table of Contents

1. [Introduction](#introduction)
2. [Requirements](#requirements)
3. [Project Structure](#project-structure)
4. [Tasks](#tasks)
5. [Testing](#testing)
6. [Linting](#linting)
7. [Usage](#usage)
8. [Contributing](#contributing)
9. [License](#license)

## Introduction

Node.js is a powerful JavaScript runtime environment that allows developers to build scalable and high-performance applications on the server-side. This project serves as a hands-on introduction to Node.js development, covering essential concepts and techniques.

## Requirements

- **Node.js**: All code is interpreted/compiled using Node.js (version 12.x.x) on Ubuntu 18.04 LTS.
- **Text Editors**: Allowed editors include vi, vim, emacs, and Visual Studio Code.
- **File Extensions**: All files should use the `.js` extension.
- **README.md**: A README.md file is mandatory at the root of the project folder.
- **Dependencies**: Install project dependencies using `npm install`.
- **Testing**: Code will be tested using Jest, and tests can be run using `npm run test`.
- **Linting**: Code will be verified against lint using ESLint.
- **Export Format**: All functions/classes must be exported using `module.exports = functionName;`.

## Project Structure

The project is structured as follows:

```
.
├── 0x05-Node_JS_basic
│   ├── 0-console.js
│   ├── 1-stdin.js
│   ├── 2-read_file.js
│   ├── 3-read_file_async.js
│   ├── 4-http.js
│   ├── 5-http.js
│   ├── 6-http_express.js
│   ├── 7-http_express.js
│   └── full_server
│       ├── controllers
│       │   ├── AppController.js
│       │   └── StudentsController.js
│       ├── routes
│       │   └── index.js
│       ├── server.js
│       └── utils.js
├── database.csv
└── package.json
```

## Tasks

The project includes several tasks covering different aspects of Node.js development, including basic JavaScript execution, handling input/output, file I/O, HTTP server creation using both Node's HTTP module and Express.js framework, and organizing a complex HTTP server using Express.js.

## Testing

- **Jest**: Tests are written using Jest, a JavaScript testing framework.
- **npm run test**: Command to run tests.
- **npm run full-test**: Command to verify the entire project, including tests and linting.

## Linting

- **ESLint**: Code is verified against lint using ESLint.

## Usage

To run the project, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd NodeJS_Basics`
3. Install dependencies: `npm install`
4. Run tests: `npm run test`

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature`)
6. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
