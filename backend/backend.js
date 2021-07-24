import express from 'express';
import users from './routes/users.js';
const server = express();
import questions from './routes/question.js'

// to resolve cors issue
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

//express middle ware to convert receiving data into JSON format
server.use(express.json());

// utilizing routes of the application
server.use(users)
server.use(questions);

server.listen(5000, () => {
    console.log("server started successfully");
})