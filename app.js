const express = require('express')
const app = express()

app.get('/greeting',(req,res)=> {
    res.send("How are you Akshay boss")
})
//users/akshay
app.get('/users/akshay',(req,res)=> {
    res.send("Akshay is greeting meeting you")
})
app.get('/hello-hello',(req,res)=> {
    res.send("Nice meeting you")
})

app.get('/bye-bye',(req,res)=> {
    res.send("Meet you soon Akshay")
})
app.listen(3000,()=> {

})
