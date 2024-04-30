// 2-read_file.js

const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');
    const students = {};
    lines.forEach((line) => {
      const student = line.split(',');
      const field = student[student.length - 1].trim();
      if (!(field in students)) students[field] = [];
      students[field].push(student[0]);
    });
    console.log(`Number of students: ${lines.length - 1}`);
    for (const field in students) {
      if (Object.hasOwnProperty.call(students, field)) {
        console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
