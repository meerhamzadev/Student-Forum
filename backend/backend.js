import express, {json} from 'express';
import users from './routes/users';
const server = express();


// to resolve cors issue
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

//express middle ware to convert receiving data into JSON format
server.use(json());

// utilizing routes of the application
server.use(users)


server.listen(5000, () => {
    console.log("server started successfully");
})