const pool = require("../models/db");
const { getAll, getById, insert, update, remove } = require("../models/query");

const getAllProducts = (req, res) => {
  pool.query(getAll, (error, results) => {
    if (error) res.status(404).json({ message: err });
    res.status(200).json(results.rows);
  });
};
const getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(getById, [id], (err, results) => {
    const product = results.rows;
    product.length == 0 ? res.status(404).json({ message: "data notfound" }) : res.status(200).json(product);
  });
};
const addProduct = (req, res) => {
  const { title_book, writer, year_publish, user_id } = req.body;
  console.log(createdAt);
  pool.query(insert, [title_book, writer, year_publish, user_id], (err, results) => {
    res.status(201).json({ message: "success created" });
  });
};
const deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(remove, [id], (err, results) => {
    // mengecek apakah ada perubahan yang terjadi/keberhasilan menghapus data
    results.rowCount == 0 ? res.status(404).json({ message: "products notfound" }) : res.status(200).json({ message: "success deleted" });
  });
};
const updateProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const { title_book, writer, year_publish, user_id } = req.body;
  pool.query(update, [title_book, writer, year_publish, user_id, id], (err, results) => {
    res.status(200).json({ message: "success updated" });
  });
};
module.exports = { getAllProducts, getProductById, addProduct, deleteProduct, updateProduct };
