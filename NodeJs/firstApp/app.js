const express = require('express');
const app = express();
const port = 3000;
// any time we got request below code will run
// app.use((req,res)=>{
//     console.log('we go ta new request fron client')
//     res.send('hello we got your request')
// })
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/employee', (req, res) => {
  res.send('this is employee page');
});

app.get('/employees', (req, res) => {
  res.send('this is all employees page');
});

app.get('/employee/:id', (req, res) => {
  const { id } = req.params;
  res.send(`this page is page of id: ${id} employee`);
});

app.get('/search', (req, res) => {
  const { name, age } = req.query;
  !name && !age
    ? res.send('nothing to find')
    : res.send(`${name} ${!age ? 'private' : age}`);
  console.log({ name, age });
});

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
