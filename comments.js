// Create Web Server
// Create API
// Create API to add comment
// Create API to get comments

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

let comments = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/comments', (req, res) => {
  res.status(200).send(comments);
});

app.post('/comments', (req, res) => {
  const { name, comment } = req.body;
  comments.push({ name, comment });
  res.status(201).send('success');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

