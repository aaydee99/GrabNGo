const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

// Connect to SQLite database
const db = new sqlite3.Database('GrabNGo.db');

// Middleware to parse JSON requests
app.use(express.json());

// Define routes

// Route to fetch items from the database
app.get('/items', (req, res) => {
  // Query database for items
  db.all('SELECT * FROM items', (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(rows);
  });
});

// Example route to fetch data from the database
app.get('/api/data', (req, res) => {
    db.all('SELECT * FROM items', (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(rows);
    });
});


// Route to add a new item
app.post('/items', (req, res) => {
  // Parse request body
  const { name, quantity } = req.body;
  if (!name || !quantity) {
    res.status(400).send('Name and quantity are required');
    return;
  }
  db.run('INSERT INTO items (name, quantity) VALUES (?, ?)', [name, quantity], function(err) {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.status(201).send('Item added successfully');
  });
});

// Route to update an existing item
app.put('/items/:id', (req, res) => {
  // Parse request parameters and body
  const { id } = req.params;
  const { name, quantity } = req.body;
  if (!name && !quantity) {
    res.status(400).send('Name or quantity is required');
    return;
  }
  db.run('UPDATE items SET name = COALESCE(?, name), quantity = COALESCE(?, quantity) WHERE id = ?', [name, quantity, id], function(err) {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.status(200).send('Item updated successfully');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});