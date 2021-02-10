const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

const app = express();

//connect to MongoDB

//register view engine

app.set('view engine', 'ejs');

app.listen(process.env.PORT || 4000);

//grant access to static files

app.use(express.static('public'));

//morgan middleware

app.use(morgan('dev'));

//middleware to convert posts to right format

app.use(express.urlencoded({ extended: true }));

//routes