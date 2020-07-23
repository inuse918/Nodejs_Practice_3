const express=require('express');
const fs=require('fs');
const app=express();
const PORT=3000;

app.set('views','./views');
app.set('view engine','pug');
app.locals.pretty=true;

app.get('/',(req,res)=>{
    res.send('<h1>hello world</h1>');
})

app.get('/sss',(req,res)=>{
    fs.readdir('./data',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        //res.send('디렉토리를 읽어옴');
        console.log(result);

        res.render('app',{
            _list:result
        })
    })
})


app.get('/sss/new',(req,res)=>{
    res.render('new')
})

app.post('/sss/new',(req,res)=>{
    
})

app.listen(PORT,(req,res)=>{
    console.log("Connected express server at localhost... ");
})