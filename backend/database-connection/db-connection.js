import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();
const connection = mysql.createConnection({
    host: "bgb3sdef1pqpmuucvfht-mysql.services.clever-cloud.com",
    user: "u8ohlzg55k8kj5ls",
    password: "Lw2piebEspQesieTRyPi",
    database: "bgb3sdef1pqpmuucvfht",
    port: "3306",
});

connection.connect(err => {
    if (err)
    {
        console.log(err.message);
        return;
    }

    console.log("Database Connection established successfully......");
});

export default connection;