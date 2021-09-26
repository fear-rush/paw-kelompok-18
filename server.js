const express = require('express');
const cors = require('cors');

const app = express();


var corsOpt = {
  origin: 'http://localhost:8081'
};

app.use(cors(corsOpt));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const db = require('./app/models');
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Berhasil terkoneksi ke database todoDB');
  })
  .catch((error) => {
    console.log('Gagal terkoneksi ke database todoDB', error);
    process.exit();
  });

// Simple GET Request
// app.get("/", (req, res) => {
//   res.json({
//     message: "Welcome"
//   });
// });

require('./app/routes/todo.routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
