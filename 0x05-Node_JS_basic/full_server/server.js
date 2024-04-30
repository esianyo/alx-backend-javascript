// full_server/server.js

import express from 'express';
import router from './routes';

const app = express();

// Middleware to use routes defined in routes/index.js
app.use('/', router);

const port = 1245;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
