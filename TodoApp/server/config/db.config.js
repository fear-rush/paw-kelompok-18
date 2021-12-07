const mongoose = require("mongoose");
require('dotenv').config();

const db = process.env.MONGO_URI;

const connectDatabase = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Berhasil connect ke todos database")
  } catch (err) {
    console.log(err);
    console.log("Gagal terkoneksi ke todos database")
    process.exit()
  }
}

module.exports = connectDatabase;