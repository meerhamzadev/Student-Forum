import {createConnection} from 'mysql';

const connection = createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'student-forum',
    port: 3306,
});

connection.connect(err => {
    if (err)
        throw err;

    console.log("Database Connection established successfully......");
});

export default connection;