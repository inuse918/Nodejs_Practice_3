const express=require('express');
const app=express();
const PORT=3000;
const bodyParser=require('body-parser');

app.get('/register',(req,res)=>{
    let output=`이름은 ${req.query.name}`
    res.send(output);
})

app.get('/register/:name',(req,res)=>{
    let output=`이름은 ${req.params.name} 입니다.`;
    res.send(output);
})

app.get('/',(req,res)=>{
    res.send('root');
})
app.get('/register2',(req,res)=>{
    let output=
    `<form method="post" action="/register2">
        <input type="text" name="name"/>
        <input type="submit" value="제출"/>
    </form>`;
    res.send(output);
})

app.post('/register2',(req,res)=>{
    let output=`이름은 ${req.body.name}`;
    res.send(output);
})

app.use(bodyParser.urlencoded({
    extended:false
}))

app.listen(PORT,(req,res)=>{
    console.log('server is running');
})
