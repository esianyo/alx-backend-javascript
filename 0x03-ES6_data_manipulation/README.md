# ES6 Data Manipulation

## Project Overview

This project involves a series of tasks designed to demonstrate data manipulation using ES6 features. Each task showcases the use of specific JavaScript functionalities and methods to effectively manipulate data.

## General Requirements

- The project files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`.
- All files should end with a new line.
- A `README.md` file at the root of the project is mandatory.
- Code should use the `.js` extension.
- Code will be tested using Jest with the command `npm run test`.
- Code will be verified against lint using ESLint.
- Code must pass all tests and lint checks, which can be verified by running `npm run full-test`.
- All functions must be exported.

## Tasks

### Task 0: Basic list of objects

- File: `0-get_list_students.js`
- Function: `getListStudents`
- Description: Returns an array of student objects with `id`, `firstName`, and `location` attributes.

### Task 1: More mapping

- File: `1-get_list_student_ids.js`
- Function: `getListStudentIds`
- Description: Returns an array of ids from a list of student objects. Uses the `map` function.

### Task 2: Filter

- File: `2-get_students_by_loc.js`
- Function: `getStudentsByLocation`
- Description: Returns an array of students located in a specific city. Uses the `filter` function.

### Task 3: Reduce

- File: `3-get_ids_sum.js`
- Function: `getStudentIdsSum`
- Description: Returns the sum of all student ids. Uses the `reduce` function.

### Task 4: Combine

- File: `4-update_grade_by_city.js`
- Function: `updateStudentGradeByCity`
- Description: Returns an array of students for a specific city with updated grades. Uses `filter` and `map` functions.

### Task 5: Typed Arrays

- File: `5-typed_arrays.js`
- Function: `createInt8TypedArray`
- Description: Returns a new ArrayBuffer with an Int8 value at a specified position. Throws an error if the position is out of range.

### Task 6: Set data structure

- File: `6-set.js`
- Function: `setFromArray`
- Description: Returns a Set from an array of elements.

### Task 7: More set data structure

- File: `7-has_array_values.js`
- Function: `hasValuesFromArray`
- Description: Returns a boolean indicating if all elements in an array exist within a set.

### Task 8: Clean set

- File: `8-clean_set.js`
- Function: `cleanSet`
- Description: Returns a string of all set values that start with a specific string, separated by a hyphen.

### Task 9: Map data structure

- File: `9-groceries_list.js`
- Function: `groceriesList`
- Description: Returns a map of groceries with specified items and quantities.

### Task 10: More map data structure

- File: `10-update_uniq_items.js`
- Function: `updateUniqueItems`
- Description: Returns an updated map where all items with an initial quantity of 1 are updated to 100. Throws an error if the argument is not a map.

### Task 11: Weak link data structure

- File: `100-weak.js`
- Description: Export a `const` instance of `WeakMap` named `weakMap`. Create a function `queryAPI` that accepts an `endpoint` argument and tracks the number of times `queryAPI` is called for each endpoint. If the number of queries is >= 5, it throws an error with the message "Endpoint load is high".

## Testing

To run the tests for each task, use the following command:

```sh
npm run test
```

To verify the entire project:

```sh
npm run full-test
```

## ESLint

To check the code for linting errors:

```sh
npm run lint
```

## Usage

Each task is demonstrated with a corresponding main file for testing purposes. Use the command below to run the main file for each task:

```sh
npm run dev <main-file.js>
```

For example:

```sh
npm run dev 0-main.js
```

## License

This project is licensed under the MIT License.
