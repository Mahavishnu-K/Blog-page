const express = require('express');
const mysql = require('mysql2');
const config = require('./src/config/config.json').development;
const app = express();

const PORT = 4000;

const db = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
});

db.connect((err) => {
    if (err) {  
        console.log("Database Connection Failed" + err.message);
        return;
    }
    console.log("Database Connected");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.post("/api/contact",(req, res) => {
    const {name, email, phone, message} = req.body;

    const sql = "INSERT INTO Form(name, email, phone, message) VALUES (?, ?, ?, ?)";

    db.query(sql, [name, email, phone, message], (err,result) => {
        if(err){
            console.error(err);
            return res.status(500).json({message : "Error inserting data" });
        }
        res.status(200).json({message : "Form subitted successfully"});
    });
});