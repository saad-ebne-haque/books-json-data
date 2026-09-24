const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  fs.readFile('./booksData.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading data file');
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`this server is running on port ${PORT} `);
});