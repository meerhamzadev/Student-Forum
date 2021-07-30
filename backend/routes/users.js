import { Router } from 'express';
const users = Router();
import db from '../database-connection/db-connection.js';
import bcrypt from 'bcrypt';
import validator from 'validator'

// to register/add a new user

users.post('/register', async (req, res) => {
    const { name, email, user_password, confirm_password } = req.body;

    if (user_password === confirm_password) {
        if (validator.isEmail(email) && email.indexOf('student.uet.edu.pk') !== -1 && validator.isAlpha(name.replace(" ", ""))) {
            const newData = {
                name,
                email,
                user_password: await bcrypt.hash(user_password, 3)
            }

            db.query('INSERT INTO USERS SET ?',
                newData,
                err => {
                    if (err) {
                        res.status(500).send(err.message)
                    }
                    console.log("user added successfully");
                    res.status(200).send('User added Successfully');
                })
        }
        else {
            res.status(422).send('Invalid Input')
        }
    }
    else {
        res.status(403).send('Password Does not match to each other')
    }

})

// to check user exist or not while loggingIn

users.post('/login', (req, res) => {

    const { email, password } = req.body;

    if (validator.isEmail(email) && email.indexOf('student.uet.edu.pk') !== -1) {
        db.query('SELECT * from USERS where email = ?', email, async (err, resp) => {

            if (err)
                return res.status(500).send(err.message);

            try {
                const isPasswordExist = await bcrypt.compare(password, resp[0].user_password);

                if (isPasswordExist)
                    res.status(200).send('LoggedIn Successfully')

                else
                    res.status(404).send('User not exist');
            }
            catch (e) {
                res.status(404).send('User not exist');
            }

        })
    }
    else {
        res.status(422).send('Invalid Input')
    }
})

export default users;