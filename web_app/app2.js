const express = require('express');
const app = express();
const port = 3000;

app.set("views", "./views"); // 템플릿 유형, 저장할 유형
app.set("view engine", "pug");// 템플릿 엔진을 쓸거고, 템블릿 엔진유형 
app.locals.pretty = true;

let time = Date(); // 현재시각 얻을 수 있음

app.get('/',(req, res) => {
    res.render('test', {
        _time : time
    });
})

app.get('/sss/new', (req, res) => {
    
})
app.listen(port, () => {
    console.log('Connected express server at localhost...');
})