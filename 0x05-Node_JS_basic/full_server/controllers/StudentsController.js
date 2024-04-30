// full_server/controllers/StudentsController.js

import { readDatabase } from '../utils';

class StudentsController {
  /**
   * Get all students
   * @param {Object} req - HTTP request
   * @param {Object} res - HTTP response
   */
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase('database.csv');
      let response = 'This is the list of our students\n';
      for (const [field, names] of Object.entries(students)) {
        response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(`Cannot load the database: ${error.message}`);
    }
  }

  /**
   * Get all students by major
   * @param {Object} req - HTTP request
   * @param {Object} res - HTTP response
   */
  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const students = await readDatabase('database.csv');
      if (major in students) {
        res.status(200).send(`List: ${students[major].join(', ')}`);
      } else {
        res.status(200).send(`List: None`);
      }
    } catch (error) {
      res.status(500).send(`Cannot load the database: ${error.message}`);
    }
  }
}

export default StudentsController;
