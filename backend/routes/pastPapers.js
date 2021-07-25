import {Router} from 'express';
import db from '../database-connection/db-connection.js';
const pastPapers = Router();

pastPapers.post('/pastpapers',
    async (req, res) => {
        const {year, department, subject} = req.body;
        
        db.query('SELECT * FROM pastpapers WHERE year = ? AND department = ? AND subject = ?', year, department, subject,
            async (err, data) => {
                if (err) {
                    res.status(500).send(err.message);
                }
                else {
                    res.json(
                        {
                            pastPaperData: data
                        }
                    )
                }
            }
        )
    }
)