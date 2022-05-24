const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")

const app = express();

const port = 5000;

app.use(cors())

app.use(express.json());

app.use(require("./routes/todos.route"));

mongoose
  .connect("mongodb+srv://mgls:46325899@cluster0.od801.mongodb.net/Todo-list", {})
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(port, () => {
  console.log("Сервер запущен");
});
