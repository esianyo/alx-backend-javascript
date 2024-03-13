# Student Information Table

This TypeScript project creates a table of student information using an array of Student objects.

## Code Overview

The code consists of several parts:

1. **Student Interface**: This defines the structure of a Student object, which includes `firstName`, `lastName`, `age`, and `location`.

2. **Student Instances**: Two instances of the Student interface are created, `student1` and `student2`.

3. **Students List**: An array `studentsList` is created to hold the Student instances.

4. **Table Creation**: A table is created using the `document.createElement` method. For each student in `studentsList`, a row is inserted into the table. Each row contains two cells: one for the student's full name and one for their location.

## Usage

To use this code, you need to have a TypeScript compiler installed. You can compile the TypeScript file into JavaScript using the `tsc` command. The resulting JavaScript file can be included in an HTML file to display the table.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.

## License

This project is licensed under the terms of the MIT license.
