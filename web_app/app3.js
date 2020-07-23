const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.get('/', (req, res)=> {
    res.send('<h1>HELLO NODE</h1>');
})

const list=[
    'node.js is....',
    'npm is.....',
    'Express is....'
]

app.get('/list', (req, res)=> {
    const output = 
    `<a href=${'/list/?id=0'}> Node.js </a><br>
    <a href=${'/list/?id=1'}> Npm </a><br>
    <a href=${'/list/?id=2'}> Express </a><br><br><br>
    ${list[req.query.id]}`;
    res.send(output);
})

//1. get방식 데이터 가져오기(req.query.이름)
app.get('/test', (req, res)=> {
    const _name = req.query.name;
    const _password = req.query.password;
    // localhost:3000/test?name=kim&password=30
    res.send(`이름은 ${_name}이고, 비밀번호는 ${_password}입니다.`)
})

//2. get('/test/:id')
app.get('/test/:id', (req,res) => {
    // http://localhost:3000/test/lee
    const _id = req.params.id;
    res.send(`id는 ${_id}입니다.`);

})

//3. post req.body.이름 // 폼태그이용
app.get('/test2', (req,res)=>{
    const output =
    `<form method="post">
        <p>
        아이디<input type="text" name="id" placeholder="아이디"></p>
        <p>
        비밀번호<input type="password" name="password" placeholder="비밀번호"></p>
        <p><Button type="submit">로그인</Button>`;
    res.send(output);
})

// 미들웨어(인코딩 해주는) :body-parser
app.use(bodyParser.urlencoded({ // key-value 형식으로 인코딩
    extended: false
}))

app.post('/test2',(req,res)=> {
    const _id = req.body.id;
    const _password = req.body.password;
    res.send(`입력하신 아이디는 ${_id}이고, 비밀번호는 ${_password}입니다.`);
})


app.listen(port, (req, res)=>{
    console.log('connected localhost express server...');
})