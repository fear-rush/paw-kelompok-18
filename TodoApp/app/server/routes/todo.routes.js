module.exports = app => {
  const todo = require('../controllers/todo.controller.js');

  let router = require('express').Router();

  // membuat todo baru
  router.post('/', todo.create);

  //menampilkan semua todo
  router.get('/', todo.findAll);

  //menampilkan todo dengan specified id
  router.get('/:id', todo.findOne);

  //update todo dengan specified id
  router.put('/:id', todo.update);

  // delete todo dengan specidfied id
  router.delete('/:id', todo.delete);
  
  // patch field todo dengan value baru
  router.patch('/:id', todo.patch);

  app.use('/api/todo', router);
};
