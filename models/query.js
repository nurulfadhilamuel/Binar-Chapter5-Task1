const getAll = "SELECT * FROM books";
const getById = "SELECT * FROM books WHERE id = $1";
const insert = "INSERT INTO books (title_books, writer, year_publish, user_id) VALUES ($1, $2, $3, $4)";
const update = "UPDATE books SET title_book = $1, writer = $2, year_publish = $3, user_id = $4, WHERE id = $5";
const remove = "DELETE FROM books WHERE id = $1";
module.exports = { getAll, getById, insert, update, remove };
