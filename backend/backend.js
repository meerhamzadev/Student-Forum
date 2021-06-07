const express = require('express');
const users = require('./routes/users');
const server = express();


//express middle ware to convert receiving data into JSON format
server.use(express.json());


server.use(users)


server.listen(5000, () => {
    console.log("server started successfully");
})