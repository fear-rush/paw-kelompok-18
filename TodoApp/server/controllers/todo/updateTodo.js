const db = require("../../models");
const Todo = db.todo;
// Membuat todo baru
exports.updateTodo = async (id, updatedTodo) => {
  if(!id){
    throw new Error("Masukkan ID dari ToDo yang akan Diupdate")
  }
  else if(!updatedTodo) {
    throw new Error("Masukkan Data yang Akan Diupdate")
  }

  const updateQuery = await Todo.findByIdAndUpdate(id, updatedTodo, { useFindAndModify: false, returnDocument: 'after'})

  if(!updateQuery){
    throw new Error("Tidak Ada Dokumen Ditemukan")
  }

  return {
    todo: updateQuery
  }
};
