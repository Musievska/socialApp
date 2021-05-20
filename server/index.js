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

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('api/posts', postRoutes);


app.get('/', (req, res) => {
    res.send('Homepage')
});

app.listen(8800, () => {
    console.log('port 8800 is listening');
});