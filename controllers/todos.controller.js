const Todo = require("../models/Todo.model");

module.exports.todoController = {
  addTodo: async (req, res) => {
    try {
      const todo = await Todo.create({
        text: req.body.text,
        condition: req.body.condition,
      });
      res.json(todo);
    } catch (err) {
      res.json({ error: "Ошибка при создании тудушки" });
    }
  },
  changeTodo: async (req, res) => {
    try {
      await Todo.findByIdAndUpdate(req.params.id, {
        text: req.body.text,
        condition: req.body.condition,
      });
      res.json("Тудушка изменена");
    } catch (err) {
      console.log({ error: "Ошибка при изменении тудушки" });
    }
  },
  deleteTodo: async (req, res) => {
    try {
      await Todo.findByIdAndDelete(req.params.id);
      res.json("Тудушка удалена");
    } catch (err) {
      res.json({ error: "Ошибка при удалении тудушки" });
    }
  },
  getTodo: async (req, res) => {
    try {
      const cat = await Todo.find();
      res.json(cat);
    } catch (err) {
      res.json({ error: "Ошибка при выводе тудудшек" });
    }
  },
};
