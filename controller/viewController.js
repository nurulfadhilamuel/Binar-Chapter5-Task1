const pool = require("../models/db");
const { getAll, getById, insert, update, remove } = require("../models/query");

const tampilanUtama = (req, res) => {
  pool.query(getAll, (error, results) => {
    const books = results.rows;
    console.log(books);
    res.render("index", { layout: "parsials/layouts", title: "Halaman Product", books, msg: req.flash("msg") });
  });
};
const detailProduct = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(getById, [id], (err, results) => {
    const book = results.rows[0];
    res.render("detailProduct", { layout: "parsials/layouts", title: "detail Product", book });
  });
};
const tambahProduct = (req, res) => {
  res.render("tambahProduct", { layout: "parsials/layouts", title: "Tambah Product" });
};
const simpanProduct = (req, res) => {
  const { title_books, writer, year_publish, user_id } = req.body;
  pool.query(insert, [title_books, writer, year_publish, user_id], (err, results) => {
    req.flash("msg", "Data product berhasil ditambahkan");
    res.redirect("/");
  });
};
const hapusProduct = (req, res) => {
  const id = parseInt(req.body.id);
  pool.query(remove, [id], (err, results) => {
    req.flash("msg", "Data product berhasil dihapus");
    res.redirect("/");
  });
};
const simpanPerubahProduct = (req, res) => {
  const id = parseInt(req.body.id);
  const { title_book, writer, year_publish, user_id } = req.body;
  pool.query(update, [title_book, writer, year_publish, user_id, id], (err, results) => {
    req.flash("msg", "Data product berhasil diubah");
    res.redirect("/");
  });
};
const ubahProduct = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(getById, [id], (err, results) => {
    const books = results.rows[0];
    res.render("ubahProduct", { layout: "parsials/layouts", title: "detail Product", books });
  });
};
module.exports = { tampilanUtama, tambahProduct, hapusProduct, simpanProduct, detailProduct, ubahProduct, simpanPerubahProduct };
