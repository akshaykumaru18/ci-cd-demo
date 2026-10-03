const express = require('express')
const app = express()

app.get('/greeting',(req,res)=> {
    res.send("How are you Akshay")
})

app.get('/bye-bye',(req,res)=> {
    res.send("Meet you soon Akshay")
})
app.listen(3000,()=> {

})
