const { Router } = require("express");
const { getAllProducts, getProductById, addProduct, deleteProduct, updateProduct } = require("../controller/apiController");
const { tampilanUtama, tambahProduct, hapusProduct, simpanProduct, detailProduct, ubahProduct, simpanPerubahProduct } = require("../controller/viewController");
const router = Router();

// route untuk merender ejs/ halaman
router.get("/", tampilanUtama);
router.get("/tambah", tambahProduct);
router.get("/detail/:id", detailProduct);
router.get("/ubah/:id", ubahProduct);
router.post("/tambah", simpanProduct);
router.delete("/hapus", hapusProduct);
router.put("/update", simpanPerubahProduct);

// route untuk Api
router.get("/api", getAllProducts);
router.post("/api", addProduct);
router.get("/api/:id", getProductById);
router.put("/api/:id", updateProduct);
router.delete("/api/:id", deleteProduct);

module.exports = router;
