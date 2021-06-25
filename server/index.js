const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');


dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
    console.log('Connected to MongoDB');
    });

app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/server/users', userRoutes);
app.use('/server/auth', authRoutes);
app.use('server/posts', postRoutes);


app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/public' + 'style.css')
});

app.listen(8800, () => {
    console.log('port 8800 is listening');
});