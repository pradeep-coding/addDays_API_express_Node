const express = require("express");
const addDays = require("date-fns/addDays");
const app = express();

app.get("/", (request, response) => {
  const date = addDays(new Date(), 100);
  const newDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  response.send(newDate);
});

app.listen(3000);

module.exports = app;
