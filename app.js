const express = require('express')
const app = express();
const path = require('path')
const port = process.env.PORT || 3000;



app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
})

app.get('/register.html', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
})

app.get('/login', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})

app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(port, (req, res)=>{
    console.log('Server On por 3000')
})
