module.exports = (app) => {
  const todo = require("../controllers/todo.controller.js");

  let router = require("express").Router();

  // membuat todo baru
  router.post("/", async (req, res) => {
    const { title, description } = req.body;
    console.log(req.body);

    try {
      const data = await todo.create(title, description);
      res.send(data);
    } catch (err) {
      console.log(err);

      return res.status(500).send({
        message: err.message,
      });
    }
  });

  //menampilkan semua todo
  router.get("/", todo.findAll);

  //menampilkan todo dengan specified id
  router.get("/:id", todo.findOne);

  //update todo dengan specified id
  router.put("/:id", async (req, res) => {
    const id = req.params.id;

    try {
      const data = await todo.update(id, req.body);
      if (!data) {
        res.status(404).send({ message: `Update todo dengan id: ${id} gagal` });
      } else res.send({ message: `Todo dengan id: ${id} berhasil diupdate` });
    } catch (err) {
      return res.status(500).send({
        message: err.message,
      });
    }
  });

  // delete todo dengan specidfied id
  router.delete("/:id", async (req, res) => {
    const id = req.params.id;

    try {
      const data = await todo.delete(id);
      if (!data) {
        res.status(404).send({ message: `Delete todo dengan id: ${id} gagal` });
      } else res.send({ message: `Todo dengan id: ${id} berhasil di-delete` });
    } catch (err) {
      return res.status(500).send({
        message: err.message,
      });
    }
  });
  // patch field todo dengan value baru
  router.patch("/:id", todo.patch);

  app.use("/api/todo", router);
};
