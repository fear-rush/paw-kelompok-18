const db = require('../models');
const Todo = db.todo;
const {createTodo} = require("./todo/createTodo")
const {updateTodo} = require("./todo/updateTodo")
const {deleteTodo} = require("./todo/deleteTodo")


// Membuat todo baru
exports.create = createTodo

// Menampilkan semua todo
exports.findAll = (req, res) => {
  const title = req.query.title;
  let condition = title ? { title: { $regex: new RegExp(title), $options: 'i'} } : {} // retrieve title dengan regex matching dan flag ignore case

  Todo.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      res.status(500).send({
        message: error.message || 'Gagal mendapatkan Todo List'
      });
    });
};

// Menampilkan todo dengan specified id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Todo.findById(id)
    .then(data => {
      if (!data) res.status(404).send({ message: `Todo dengan id: ${id} tidak dapat ditemukan`});
      else res.send(data);
    })
    .catch(error => {
      res.status(500).send({ message: 'Terjadi Error'}, error);
    })
};

// Update todo dengan specified id
exports.update = updateTodo

// delete todo dengan specified id
exports.delete = deleteTodo

// update salah satu atribut todo dengan id yang ditentukan
exports.patch = (req, res) => {
  const id = req.params.id;

  const key = req.body.key;
  const value = req.body.value;

 // tentukan apakah request body valid
 switch (key){
  case 'title':
    var updatedField = {
      title: value
    }
    break;
  case 'description':
    var updatedField = {
      description: value
    }
      break;
  default:
    res.status(400).send({message: `request body tidak valid. Request PATCH gagal`})
    return;
}

  Todo.findByIdAndUpdate(id, updatedField)
    .then(data => {
      if (!data){
        res.status(404).send({ message: `tidak ditemukan todo dengan id: ${id}. Request PATCH gagal`});
      }
      else {
        res.status(200).send({message: `Berhasil ubah field ${key} dari ${id} menjadi ${value}`})
      }
    })

    .catch(error => {
      res.status(500).send({ message: `Gagal patch todo dengan id: ${id}`});
    })
}

