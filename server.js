const express = require("express");
const expressLayouts = require("express-ejs-layouts");
var methodOverride = require("method-override");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

const productsRouter = require("./routes/routes");

const app = express();
const port = 3000;

app.use(methodOverride("_method"));
// konfigurasi flash MessageChannel
app.use(cookieParser("secret"));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

// midleware untuk bisa mengirimkan reequest body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

// midleware untuk layouting
app.use(expressLayouts);

// menggunakan route terpisah
app.use(productsRouter);

app.listen(port, () => {
  console.log(`server berjalan di http://localhost:${port}`);
});
