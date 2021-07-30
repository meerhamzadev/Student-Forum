import express from 'express';
import users from './routes/users.js';
const server = express();
import questions from './routes/question.js'
import timetable from './routes/timetable.js'
import pastPaper from './routes/pastPapers.js';
import books from './routes/books.js';
import updatePassword from './routes/updatePassword.js';
import deletePassword from './routes/deleteAccount.js';

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
server.use(timetable);
server.use(pastPaper);
server.use(books);
server.use(updatePassword);
server.use(deletePassword);

server.listen(5000, () => {
    console.log("server started successfully");
})