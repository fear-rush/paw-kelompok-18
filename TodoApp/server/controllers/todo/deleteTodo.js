const db = require("../../models");
const Todo = db.todo;
// Membuat todo baru
exports.deleteTodo = async (id) => {
  if(!id){
    throw new Error("Masukkan ID dari ToDo yang akan Diupdate")
  }
  const deletedTodo = await Todo.findByIdAndRemove(id)

  if(!deletedTodo){
    throw new Error("Tidak Ada Dokumen Ditemukan")
  }

  return {
    todo: deletedTodo
  }
};
