const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');


const authRoute = require('./routes/auth');
dotenv.config();

mongoose.connect(process.env.DB_CONNECT)
    .then(() => console.log('Mongo Connected'))
    .catch((err) => console.log(err));


app.use(express.json());

app.use('/api/user', authRoute);

app.listen(3000, ()=> console.log('Server Running'));

