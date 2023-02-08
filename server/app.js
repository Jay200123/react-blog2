const express = require('express'),

app = express();

const products = require('./routes/product');
const auth = require('./routes/auth');

app.use(express.json());

app.use('/api/v1',products);
app.use('/api/v1',auth);

module.exports = app

