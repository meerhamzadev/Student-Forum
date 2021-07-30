import { Router } from 'express';
import db from '../database-connection/db-connection.js';
import bcrypt from 'bcrypt';
const updatePassword = Router();


updatePassword.post('/changePassword', async (req, res) => {
    let { email, user_password, confirmPassword } = req.body;

    if (user_password === confirmPassword) {
        const temp = await bcrypt.hash(user_password, 3);
        user_password = temp;

        db.query("Update USERS set user_password = ? where email = ? ", [user_password, email],
            (err) => {
                if (err) {
                    return res.status(500).send(err.message)
                }
                res.status(200).send("Password updated successfully");
            });
    }
    else {
        res.status(403).send('Entered passwords are not same')
    }
})

export default updatePassword;