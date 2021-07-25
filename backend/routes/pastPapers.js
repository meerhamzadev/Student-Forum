import { Router } from 'express';
import db from '../database-connection/db-connection.js';
const pastPapers = Router();

pastPapers.post('/pastpapers', (req, res) => {

    const { Year, subject } = req.body;

    db.query('SELECT * FROM pastpaper WHERE paper_year = ? and paper_subject = ?',
        [Year, subject],
        (err, data) => {
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


export default pastPapers;