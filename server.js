const express = require('express');
var expressLayouts = require('express-ejs-layouts');
// dotenv
require('dotenv').config()

const app = express();
const port = 5000;
const hostname = 'localhost';

// set template engine
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.set('layout', 'layouts/layout')

// static file
app.use(express.static('public'))

// routes
const customers = require('./routes/customers');
app.use('/customers', customers)
app.use('/', (req, res) => {
  res.render('home');
})

// api
app.get('/api', (req, res) => {
  res.json({ users: ['Faris', 'Arif', 'Anisah'] });
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});