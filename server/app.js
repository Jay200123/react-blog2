const express = require('express')
var cors = require('cors')

const products = require('./routes/product');
const auth = require('./routes/auth');
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')

app = express();

app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors())

app.use('/api/v1',products);
app.use('/api/v1',auth);

app.use(express.json());

app.use(cookieParser());

module.exports = app

