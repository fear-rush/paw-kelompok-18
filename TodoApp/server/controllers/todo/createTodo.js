const db = require("../../models");
const Todo = db.todo;
// Membuat todo baru
exports.createTodo = async (title, description) => {
  if (!title) {
    throw new Error("No Title is Given")
  }
  else if (!description) {
    throw new Error("No Description is Given")
  }

  const todo = new Todo({
    title: title,
    description: description,
  });

  todo.save(todo);

  return {
    todo: todo
  }
};
