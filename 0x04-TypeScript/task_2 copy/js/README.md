# Teacher and Director Information

This TypeScript project defines a `Teacher` interface and a `Directors` interface that extends the `Teacher` interface. It then creates an instance of the `Directors` interface.

## Code Overview

The code consists of three main parts:

1. **Teacher Interface**: This defines the structure of a `Teacher` object, which includes `firstName`, `lastName`, `fullTimeEmployee`, `yearsOfExperience`, `location`, and an index signature `[key: string]: any;` to allow additional attributes with any value.

2. **Directors Interface**: This interface extends the `Teacher` interface and adds a `numberOfReports` attribute, which represents the number of reports a director has.

3. **Director Instance**: An instance of the `Directors` interface named `director1` is created. This object includes `firstName`, `lastName`, `location`, `fullTimeEmployee`, and `numberOfReports`.

The `console.log(director1);` statement will print the `director1` object to the console.

## Usage

To use this code, you need to have a TypeScript compiler installed. You can compile the TypeScript file into JavaScript using the `tsc` command. The resulting JavaScript file can be run in a JavaScript environment (like Node.js or a web browser) to display the `director1` object.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.

## License

This project is licensed under the terms of the MIT license.
