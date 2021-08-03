import { Router } from 'express';
import db from '../database-connection/db-connection.js';
import bcrypt from 'bcrypt';
const deleteAccount = Router();

deleteAccount.post('/deleteUser', async (req, res) => {
    let { email } = req.body;

    db.query('delete from USERS where email = ?', email, (err) => {
        if (err) {
            return res.status(500).send("Error")
        }
        res.send("User deleted Successfully")
    })
})

export default deleteAccount;