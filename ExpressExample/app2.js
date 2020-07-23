const express=require('express');
const app=express(); //application 객체 생성
const PORT=3000;
const hostname='localhost';

app.listen(PORT,hostname,(req,res)=>{
    //console.log('express web server at localhost');
    console.log(`Connected express server at ${hostname}:${PORT}`);
})
app.get('/',(req,res)=>{
    res.send('hello express');
    
})