const express=require('express');
const app=express();
const PORT=3000;
const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.send('mongoDB');
})
app.listen(PORT,(req,res)=>{
    console.log('running');
})