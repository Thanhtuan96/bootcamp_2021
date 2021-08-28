const express = require('express');
const app = express();

const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello word');
});

app.get('/tacos', (req, res) => {
    res.send(`this is get method`);
});
app.post('/tacos', (req, res) => {
    console.log(req.body); // will return underfine as default unless install middleware body-parses
    res.send(`your producted is created`);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
