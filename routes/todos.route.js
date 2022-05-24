const { Router } = require("express");

const { todoController } = require("../controllers/todos.controller");

const router = Router();

router.post("/todos", todoController.addTodo);
router.patch("/todos/:id", todoController.changeTodo);
router.delete("/todos/:id", todoController.deleteTodo);
router.get("/todos", todoController.getTodo);


module.exports = router;

// const lorem = Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia impedit, eum ipsum molestias porro fugit adipisci sit cum corporis ipsa unde similique quae, corrupti in laboriosam ratione sapiente at omnis?
