# NodeJS basics

## 1. Install NodeJs

[NodeJs home page](https://nodejs.org/ja/)

## 2. What do people build with nodeJs

- Web servers (ExpressJS)
- Command Line Tools
- Native Apps (Slack, VSCode is a Node app!!)
- Video Games
- Drone Software
- A whole lot more!!!!

## Build first NodeJs server with Express

1. create new file call firstApp

```JS
 mkdir firstApp
```

2. make file pakages.json

```
 npm init
```

3. create the first NodeJs app using Express

create app.js file and add this code

```JS

const express = require('express')
const app = express()
const port = 3000;

app.listen(port,()=>{
    console.log(`listening on port ${port}!`)
})

```

4. make the first GET request

```JS
app.get('/employee',(req, res)=>{
    res.send('this is employee page')
})
```

## Templating

We can use serveral templating for define a preset " parten " for a webpages

We could define a single "Search" template that displays all the results for a given search term. We don't know what the term is or how many results there are ahead of time. The webpage is created on the fly.

For example:

- [pug](https://github.com/pugjs/pug) :Haml-inspired template engine (formerly Jade).
- [Haml.js](https://github.com/tj/haml.js) : Haml implementation.
- [EJS](https://github.com/tj/ejs) Embedded JavaScript template engine.
- [etc...](https://expressjs.com/en/resources/template-engines.html)

1. install ejs engine

```JS
npm i --save ejs
```

2. set view engine for the app

```JS
app.set('view engine', 'ejs')
```

3. create folder views and home.ejs files

4. create endpoint for this site

```Js
app.get('/', (req, res) => {
  res.render('index');
});
```

**Setting the views Directory**

```JS
const path = require('path')

app.set('views', path.join(__dirname, 'views'))
```

---

## GET vs POST
