import { Router } from 'express';
import db from '../database-connection/db-connection.js';
const books = Router();

books.post('/books',
    async (req, res) => {
        const { type } = req.body;

        db.query('SELECT * FROM books WHERE book_type = ?', type,
            async (err, data) => {
                if (err) {
                    res.status(500).send(err.message);
                }
                else {
                    res.json(
                        {
                            booksData: data
                        }
                    )
                }
            }
        )
    }
)

export default books;