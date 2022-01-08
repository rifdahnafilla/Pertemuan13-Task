// import mysql
const mysql = require("mysql");

// import dotenv
require("dotenv").config();

// buat koneksi,createConnection (klo udh diisi datanya baru dibuat variabelnya)
// menggunakan konfigurasi database dari file .env
const db = mysql.createConnection({
  host: DB_HOST || "localhost",
  user: DB_USERNAME || "root",
  password: DB_PASSWORD || "",
  database: DB_DATABASE || "laravel_rest_api",
});

//konek ke db
db.connect(function (err) {
  if (err) {
    console.log("Koneks error" + err);
    return;
  } else {
    console.log("Koneksi berhasil");
    return;
  }
});

// export db
module.exports = db;