const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// View Engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/programs', (req, res) => {
  res.render('programs');
});

app.get('/membership', (req, res) => {
  res.render('membership');
});

app.get('/donate', (req, res) => {
  res.render('donate');
});

app.get('/events', (req, res) => {
  res.render('events');
});

app.get('/resources', (req, res) => {
  res.render('resources');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
