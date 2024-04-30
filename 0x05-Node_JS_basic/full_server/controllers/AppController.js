// full_server/controllers/AppController.js

class AppController {
    /**
     * Get homepage
     * @param {Object} req - HTTP request
     * @param {Object} res - HTTP response
     */
    static getHomepage(req, res) {
      res.status(200).send('Hello Holberton School!');
    }
  }
  
  export default AppController;
  