const express = require("express");
const compression = require("compression");
const bodyParser = require("body-parser");

const app = express();
const server = require("http").Server(app);

const PORT = process.env.PORT || 3002;

app.use(require("cors")());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

// app.use('/', require('./routes'));

app.use((req, res, next) => {
  //instruct web browsers to block attempts to load the site in a frame.
  res.setHeader("x-frame-options", "DENY");
  next();
});

server.listen(PORT, () => console.log(`API server listening on ${PORT}`));

module.exports = { app };
