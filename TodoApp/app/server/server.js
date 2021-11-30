const express = require('express');
const cors = require('cors');
const connectDatabase = require('./config/db.config.js');

const app = express();


// var corsOpt = {
//   origin: 'http://localhost:8080'
// };
connectDatabase();
app.use(cors({origin:true, credentials: true}));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


// const db = require('./models');


// db.mongoose
//   .connect(db.url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log('Berhasil terkoneksi ke database todos');
//   })
//   .catch((error) => {
//     console.log('Gagal terkoneksi ke database todos', error);
//     process.exit();
//   });

app.get("/", (req, res) => {
  res.json({
    message: "Aplikasi CRUD berhasil dijalankan"
  });
});

require('./routes/todo.routes')(app);

<<<<<<< HEAD
const PORT = process.env.PORT || 8080;
=======
const PORT = process.env.PORT || 8000;
>>>>>>> vincent_branch
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
