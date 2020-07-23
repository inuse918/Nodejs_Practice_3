const express = require('express');
const app = express(); // application 객체 생성됨
const port = 3000; 

app.get('/', (req,res)=>{
    res.send('<h1>Hello NodeJs</h1>');
})

app.get('/login', (req, res)=>{
    res.send('Please Login ...');
})

app.get('/logout', (req, res)=>{
    res.writeHead(200,{'Content-Type' : 'text/html; charset:utf8'});
    res.write('<h1>Hello Logout</h1>');
    res.end();
})

app.get('/register', (req, res)=>{
    res.send('Please register ...');
})

app.get('/cart', (req, res)=>{
    res.send('Please cart ...');
})

app.listen(port, (req, res)=>{
    console.log('express web server at localhost .....');
})

// Node Package Manager 
// 1. 모듈을 설치, 삭제, 업그레이드 시켜주고 의존성을 관리하는 것
// 1) 설치 : npm i 모듈이름 -save (-g)
// 2) npm init : 프로젝트 설명서 

//restful API /get/post/put/delete