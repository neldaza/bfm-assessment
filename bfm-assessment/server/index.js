require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const jsonMiddleware = express.json();
const app = express();

app.use(jsonMiddleware);

app.use(staticMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
