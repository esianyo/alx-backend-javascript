// full_server/utils.js

import fs from 'fs';

/**
 * Read the database asynchronously and return a promise
 * @param {string} filePath - Path to the database file
 * @returns {Promise<Object>} - Promise object representing the data read from the database
 */
const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const students = {};
        const lines = data.trim().split('\n');
        for (const line of lines) {
          const [firstname, lastname, age, field] = line.split(',');
          if (field in students) {
            students[field].push(firstname);
          } else {
            students[field] = [firstname];
          }
        }
        resolve(students);
      }
    });
  });
};

export { readDatabase };
