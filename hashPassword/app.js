require('dotenv').config();
const express = require('express');
const app = express();
const Database = require('./database');

const port = process.env.PORT;
app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(port, () => {
    console.log(`listening on port: ${port}.....`);
});
