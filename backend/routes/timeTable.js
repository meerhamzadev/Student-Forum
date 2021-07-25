import {Router} from 'express';
import db from '../database-connection/db-connection.js';
const pastPapers = Router();

pastPapers.post('/timetable',
    async (req, res) => {
        const {department, session, section} = req.body;
        
        db.query('SELECT * FROM timetable WHERE department = ? AND session = ? AND section = ?', department, session, section,
            async (err, data) => {
                if (err) {
                    res.status(500).send(err.message);
                }
                else {
                    res.json(
                        {
                            timetableData: data
                        }
                    )
                }
            }
        )
    }
)