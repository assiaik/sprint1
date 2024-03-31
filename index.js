const express = require('express');
const mysql = require('mysql2');

/*setup express */
const port = 3000;
const app = express();

/* setup database connection */
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST || "localhost",
    user: "user",
    password: "password",
    database: "world",
});

app.get('/', (req, res) => {
    res.send('POPULATION INFORMATION');
});

/* returns any array of cities from the database */


app.get("/cities", (req, res) => {
    db.execute("SELECT * FROM 'city'", (err, rows, fields) => {
        console.log('/cities: ${rows.length} rows');
        return res.send(rows);
    });
});

app.listen(port, () => {
    console.log('Server running');
});