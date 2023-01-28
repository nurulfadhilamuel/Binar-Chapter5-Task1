const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "products",
  password: "muel1345",
  port: 2204,
});

module.exports = pool;
