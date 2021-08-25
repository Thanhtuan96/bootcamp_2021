const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static('public'));
// any time we got request below code will run
// app.use((req,res)=>{
//     console.log('we go ta new request fron client')
//     res.send('hello we got your request')
// })
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/rand', (req, res) => {
  const randNum = Math.floor(Math.random() * 1000) + 1;

  res.render('random', { rand: randNum });
});

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
