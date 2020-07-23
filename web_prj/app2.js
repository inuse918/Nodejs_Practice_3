const express=require('express');
const app=express();
const PORT=3000;

app.set('views','./views');
app.set('view engine','pug');
app.locals.pretty=true;

let time =Date(); //현재 시간을 구하는 함수

app.get('/',(req,res)=>{
    res.render('test',{
        _time:time
    });
})

app.listen(PORT,(req,res)=>{
    console.log("Connected express server at localhost... ");
})