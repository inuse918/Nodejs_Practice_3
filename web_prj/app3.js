const express=require('express');
const app=express();
const PORT = 3000;
const bodyParser=require('body-parser');


const list=[
    'node js is...',
    'npm is...',
    'Express is...'
]

app.get('/list',(req,res)=>{
    let output=`<a href="/list?id=0">Nodejs</a> <br>
    <a href="/list?id=1">Npm</a> <br>
    <a href="/list?id=2">Express</a>
    <br><br>
    ${list[req.query.id]}
    `;
    res.send(output);

})

//1. 넘어온 데이터 출력
app.get('/test',(req,res)=>{
    //http://localhost:3000/test
    
    let output=`이름은 ${req.query.name}이고 비밀번호는 ${req.query.password}입니다.`;
    
    res.send(output);

})
//2. get ('/test/:id)
app.get('/test/:id',(req,res)=>{
    //http://localhost:3000/test/lee
    let output=  `이름은 ${req.params.id}`;
    res.send(output);
})

//3. post req.body.이름
app.get('/test2',(req,res)=>{
    let output=`
    <form method="post" action=/test2>
        <strong>아이디<strong>
        <input type="text" name="id" placeholder="아이디 입력"/>
        <br>
        <strong>비밀번호<strong>
        <input type="password" name="password" placeholder="비밀번호 입력"/>
        <br>
        <input type="submit" value="제출"/>
    </form>`
    res.send(output);
})

app.use(bodyParser.urlencoded({
    extended:false
})) //인코딩 해주는 미들웨어
app.post('/test2',(req,res)=>{
    let output=`입력하신 id는 ${req.body.id}이고, 비밀번호는 ${req.body.password}입니다.`;
    res.send(output);
})


app.get('/',(req,res)=>{
    res.send('hello node');
})
app.listen(PORT,(req,res)=>{
    console.log('running');
})


