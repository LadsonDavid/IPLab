var mysql = require('mysql');
const express = require('express');

// Create connection to MySQL server (without database initially)
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "vaishu"
    // database: "product" // This will be added after database creation
});

// Connect to MySQL server
connection.connect(function(err) {
    if (err) {
        console.error('Error connecting to MySQL server:', err);
        throw err;
    }
    console.log("Connected to MySQL server successfully");
});

const app = express();

// Create database product
app.get('/createproduct', (req, res) => {
    let sql = 'CREATE DATABASE IF NOT EXISTS product';
    connection.query(sql, (err) => {
        if (err) {
            console.error('Error creating database:', err);
            res.status(500).send("Error creating database: " + err.message);
            return;
        }
        console.log("Database 'product' created successfully");
        res.send("Database 'product' created successfully");
    });
});

// Connect to the product database
app.get('/connectproduct', (req, res) => {
    connection.query('USE product', (err) => {
        if (err) {
            console.error('Error connecting to database:', err);
            res.status(500).send("Error connecting to database: " + err.message);
            return;
        }
        console.log("Connected to 'product' database");
        res.send("Connected to 'product' database successfully");
    });
});

// Create table chocolates
app.get('/createchocolates', (req, res) => {
    let sql = `CREATE TABLE IF NOT EXISTS chocolates(
        pid int AUTO_INCREMENT,
        name VARCHAR(30),
        price integer,
        PRIMARY KEY(pid)
    )`;
    connection.query(sql, (err) => {
        if (err) {
            console.error('Error creating chocolates table:', err);
            res.status(500).send("Error creating chocolates table: " + err.message);
            return;
        }
        console.log("Chocolates table created successfully");
        res.send("Chocolates table created successfully");
    });
});

// Create table stationary
app.get('/createstat', (req, res) => {
    let sql = `CREATE TABLE IF NOT EXISTS stationary(
        pid int AUTO_INCREMENT,
        name VARCHAR(30),
        price integer,
        PRIMARY KEY(pid)
    )`;
    connection.query(sql, (err) => {
        if (err) {
            console.error('Error creating stationary table:', err);
            res.status(500).send("Error creating stationary table: " + err.message);
            return;
        }
        console.log("Stationary table created successfully");
        res.send("Stationary table created successfully");
    });
});

// Insert data into chocolates table
app.get('/chocolate1', (req, res) => {
    let post = { name: 'Nutties', price: 100 };
    let sql = 'INSERT INTO chocolates SET ?';
    let query = connection.query(sql, post, (err, result) => {
        if (err) {
            console.error('Error inserting chocolate:', err);
            res.status(500).send("Error inserting chocolate: " + err.message);
            return;
        }
        console.log("Chocolate added with ID:", result.insertId);
        res.send("Chocolate added successfully with ID: " + result.insertId);
    });
});

// Insert data into stationary table
app.get('/stationary1', (req, res) => {
    let post = { name: 'Poster Colours', price: 500 };
    let sql = 'INSERT INTO stationary SET ?';
    let query = connection.query(sql, post, (err, result) => {
        if (err) {
            console.error('Error inserting stationary:', err);
            res.status(500).send("Error inserting stationary: " + err.message);
            return;
        }
        console.log("Stationary added with ID:", result.insertId);
        res.send("Stationary added successfully with ID: " + result.insertId);
    });
});

// Select all chocolates
app.get('/getchocolates', (req, res) => {
    let sql = 'SELECT * FROM chocolates';
    let query = connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching chocolates:', err);
            res.status(500).send("Error fetching chocolates: " + err.message);
            return;
        }
        console.log("Chocolates fetched:", results);
        res.json({
            message: "Chocolates fetched successfully",
            data: results
        });
    });
});

// Select all stationary
app.get('/getstat', (req, res) => {
    let sql = 'SELECT * FROM stationary';
    let query = connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching stationary:', err);
            res.status(500).send("Error fetching stationary: " + err.message);
            return;
        }
        console.log("Stationary fetched:", results);
        res.json({
            message: "Stationary fetched successfully",
            data: results
        });
    });
});

// Update chocolate by pid
app.get('/updatechoco/:pid', (req, res) => {
    let newName = 'Diary Milk';
    let sql = `UPDATE chocolates SET name='${newName}' WHERE pid=${req.params.pid}`;
    let query = connection.query(sql, (err, result) => {
        if (err) {
            console.error('Error updating chocolate:', err);
            res.status(500).send("Error updating chocolate: " + err.message);
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).send("No chocolate found with ID: " + req.params.pid);
            return;
        }
        console.log("Chocolate updated:", result);
        res.send("Chocolate updated successfully. Rows affected: " + result.affectedRows);
    });
});

// Delete chocolate by pid
app.get('/deletechoco/:pid', (req, res) => {
    let sql = `DELETE FROM chocolates WHERE pid=${req.params.pid}`;
    let query = connection.query(sql, (err, result) => {
        if (err) {
            console.error('Error deleting chocolate:', err);
            res.status(500).send("Error deleting chocolate: " + err.message);
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).send("No chocolate found with ID: " + req.params.pid);
            return;
        }
        console.log("Chocolate deleted:", result);
        res.send("Chocolate deleted successfully. Rows affected: " + result.affectedRows);
    });
});

// Home route
app.get('/', (req, res) => {
    res.send(`
        <h1>Node.js MySQL CRUD Application</h1>
        <h2>Available Endpoints:</h2>
        <ul>
            <li><a href="/createproduct">Create Database</a></li>
            <li><a href="/connectproduct">Connect to Database</a></li>
            <li><a href="/createchocolates">Create Chocolates Table</a></li>
            <li><a href="/createstat">Create Stationary Table</a></li>
            <li><a href="/chocolate1">Add Chocolate</a></li>
            <li><a href="/stationary1">Add Stationary</a></li>
            <li><a href="/getchocolates">Get All Chocolates</a></li>
            <li><a href="/getstat">Get All Stationary</a></li>
            <li>/updatechoco/:pid - Update Chocolate (replace :pid with actual ID)</li>
            <li>/deletechoco/:pid - Delete Chocolate (replace :pid with actual ID)</li>
        </ul>
    `);
});

// Start server
app.listen('3000', () => {
    console.log("Server started at port 3000");
    console.log("Visit http://localhost:3000 to see available endpoints");
});
