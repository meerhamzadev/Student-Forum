import { Router } from 'express';
import db from '../database-connection/db-connection.js';
import bcrypt from 'bcrypt';
const deleteAccount = Router();

deleteAccount.post('/deleteUser', async (req, res) => {
    let { email, password } = req.body;

    db.query('delete from USERS as first_table and USERS as second_table where email = ?', email, (err) => {
        if (err) {
            return res.status(500).send("Error")
        }
        res.send("User deleted Successfully")
    })
})

export default deleteAccount;