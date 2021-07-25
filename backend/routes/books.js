import {Router} from 'express';
import db from '../database-connection/db-connection.js';
const books = Router();

books.post('/books',
    async (req, res) => {
        const {department, session, section, subject} = req.body;
        
        db.query('SELECT * FROM books WHERE department = ? AND session = ? AND section = ? AND subject = ?', department, session, section, subject,
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