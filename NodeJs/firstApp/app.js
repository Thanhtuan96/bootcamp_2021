const express = require('express')
const app = express()

// any time we got request below code will run
app.use((req,res)=>{
    console.log('we go ta new request fron client')
    res.send('hello we got your request')
})

// app.get('/',(req, res)=>{
//     res.send('hello word')
// })

app.listen(3000,()=>{
    console.log('listening on port 3000!')
})
