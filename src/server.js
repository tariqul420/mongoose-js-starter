import app from './app.js';
import config from './config/config.js';
import dbConnect from './lib/dbConnect.js';

// Connect to database and start server
dbConnect()
  .then(() => {
    app.listen(config.port, () => {
      console.warn(`Server running on port ${config.port}`);
    });
  })
  .catch((error) => {
    console.error('Failed to start server:', error);
    process.exit(1);
  });
