require('./env');
require('./db');

const express = require("express");

const app = express();

app.set('port', process.env.APP_PORT);
app.set('host', process.env.APP_HOST);

// Static folder
app.use('/api', express.static('./public'));

app.get("/", function (req, res) {
  res.status(200).json({
    name: "TODO",
    version: "1.0.0",
  });
});

app.listen(app.get('port'), app.get('host'), () => {
  console.log(`Server started at http://${app.get('host')}:${app.get('port')}/api`);
});

// Catch unhandled rejections
process.on('unhandledRejection', (err) => {
  logger.error('Unhandled rejection', err);

  process.exit(1);
});

// Catch uncaught exceptions
process.on('uncaughtException', (err) => {
  logger.error('Uncaught exception', err);

  process.exit(1);
});

module.exports = app;
