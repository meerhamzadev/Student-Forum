import { Router } from 'express';
const timetable = Router();
import db from '../database-connection/db-connection.js';

timetable.post('/timetable', (req, res) => {

    const { department, section, semester } = req.body;

    db.query(`SELECT * from timetable where department = ? and section = ? and semester = ?`,
        [department, section, semester],
        (err, resp) => {

            if (err) {
                return res.status(500).send(err.message);
            }

            res.status(200).json({ data: resp })
        })
})

export default timetable;