const mysql = require('mysql');

const connection = mysql.createConnection({
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

module.exports = connection;