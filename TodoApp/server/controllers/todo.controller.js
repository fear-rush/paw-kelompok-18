const db = require('../models');
const Todo = db.todo;


// Membuat todo baru
exports.create = (req, res) => {
  if (!req.body.title || !req.body.description) {
    res.status(400).send({ message: 'Title atau deskripsi tidak boleh kosong '});
    return;
  }

  const todo = new Todo({
    title: req.body.title,
    description: req.body.description
  });

  todo
    .save(todo)
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      res.status(500).send({
        message: 'Terjadi error ketika membuat list todo'
      });
    });
};

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
exports.update = (req, res) => {
  if(!req.body) {
    return res.status(400).send({ message: 'masukkan data yang akan diupdate'});
  }

  const id = req.params.id;

  Todo.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
    .then(data => {
      if (!data) {
        res.status(404).send({ message: `Update todo dengan id: ${id} gagal`});
      } else res.send({ message: `Todo dengan id: ${id} berhasil diupdate`});
    })
    .catch(error => {
      res.status(500).send({ message: `Update todo dengan id: ${id} gagal`});
    });
};



// delete todo dengan specified id
exports.delete = (req, res) => {
  const id = req.params.id;

  Todo.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: `Gagal delete todo dengan id: ${id}`});
      } else {
        res.send({ message: `Todo dengan id: ${id} berhasil didelete`});
      }
    })
    .catch(error => {
      res.status(500).send({ message: `Gagal delete todo dengan id: ${id}`});
    });
};

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

