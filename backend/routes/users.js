const express = require('express');
const users = express.Router();
const db = require('../database-connection/db-connection');
const bcrypt = require('bcrypt');


// to register/add a new user

users.post('/register', async (req, res) => {
    const { name, email, user_password } = req.body;

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
})

// to check user exist or not while loggingIn

users.post('/login', (req, res) => {

    const { email, password } = req.body;

    db.query('SELECT * from USERS where email = ?', email, async (err, resp) => {

        const isPasswordExist = await bcrypt.compare(password, resp[0].user_password);

        if (err)
            res.status(500).send(err.message);

        else if (resp.length !== 0 && isPasswordExist)
            res.status(200).send('LoggedIn Successfully')

        else
            res.status(404).send('User not exist');

    })
})

module.exports = users;