require('./env');
require('./db');

const express = require("express");
const bodyParser = require("body-parser");

const router = require('./routes/index');

const app = express();

app.set('port', process.env.APP_PORT);
app.set('host', process.env.APP_HOST);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static folder
app.use('/api', express.static('./public'));

app.use('/api', router);

app.listen(app.get('port'), app.get('host'), () => {
  console.log(`Server started at http://${app.get('host')}:${app.get('port')}/api`);
});

// Catch unhandled rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled rejection', err);

  process.exit(1);
});

// Catch uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception', err);

  process.exit(1);
});

module.exports = app;
