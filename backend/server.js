const express = require("express");
const mysql = require("mysql2");
const config = require("./src/config/config.json").development;
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
});

db.connect((err) => {
    if (err) {
        console.log("Database Connection Failed: " + err.message);
        return;
    }
    console.log("Database Connected");
});

app.post("/api/contact", (req, res) => {
    const { name, email, phone, message } = req.body;
    const sql = "INSERT INTO Form(name, email, phone, message) VALUES (?, ?, ?, ?)";

    db.query(sql, [name, email, phone, message], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Error inserting data" });
        }
        res.status(201).json({ message: "Form submitted successfully", id: result.insertId });
    });
});

app.get("/api/contact", (req, res) => {
    const sql = "SELECT * FROM Form";
    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Error fetching data" });
        }
        res.status(200).json(results);
    });
});


app.put("/api/contact/:id", (req, res) => {
    const { id } = req.params;
    const { name, email, phone, message } = req.body;
    const sql = "UPDATE Form SET name=?, email=?, phone=?, message=? WHERE id=?";

    db.query(sql, [name, email, phone, message, id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Error updating data" });
        }
        res.status(200).json({ message: "Record updated successfully" });
    });
});

app.delete("/api/contact/:id", (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM Form WHERE id = ?";

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Error deleting data" });
        }
        res.status(200).json({ message: "Record deleted successfully" });
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
