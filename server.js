const express = require('express')
const path = require("path")
const data=require('./data')
const fs=require("fs")
//const fss=require("./file")

//const s=require("A:\NODE\שב\שב4\ex4")

// console.log(data.toString())
const app = express()
const PORT = process.env.PORT || 3000
app.get('/',(req,res)=>{
res.send("Hello world!!")
})
app.get('/file',(req,res)=>{
const pathUrl = path.join(__dirname,"",'file.txt')
res.sendFile(pathUrl)
})
app.get('/html',(req,res)=>{
res.send("<h1>Home Page</h1><a href='./file'>link</a>")
})
app.get('/data',(req,res)=>{
res.json(data)
})
app.listen(PORT, ()=>console.log(`server running on ${PORT}`))









// app.get('/g',(req,res)=>{
// res.redirect(301, 'data.js') //help for search engine
// })
// app.get('/b',(req,res)=>{
// res.status(404).send('<h1>Resource Not Found</h1>')
// })
// app.get('/api/products', (req,res)=>{
// res.json([{name:'Sara'}, {name:'Rivka'}, {name:'Rachel'}])
// })

//res.sendFile('./views/index.html',{root:__dirname})
// app.get('/data',(req,res)=>{
// res.json(data.toString)
// })