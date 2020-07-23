const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.set("views", "./views"); // 템플릿 유형, 저장할 유형
app.set("view engine", "pug");// 템플릿 엔진을 쓸거고, 템블릿 엔진유형 
app.locals.pretty = true;


app.get('/sss', (req, res)=>{
    fs.readdir('./data',(err, result)=>{
        if(err){
            console.log(err);
            return;
        }else{
            // (data directory)하이퍼링크 걸고 리스트 해주기
            console.log(result);
        
            res.render('view', {
                _result : result
            });
        }
    })
})

app.get('/sss/:data', (req, res)=> {
    const _data = req.params.data;
    fs.readFile('./data/'+_data, (err, result)=> {
        if(err){
            console.log(err);
            return;
        }else{
            const output =
            `<h1>${result}</h1>`
            res.send(output);
            console.log('success readfile');
        }
    })
})

app.get('/sss/new', (req, res) => { // 주소창에 쳤을 때
    res.render('view');
})

app.post('/sss/new', (req, res) => { // 버튼을 눌렀을 때 post 발생
    
})

app.listen(port, () => {
    console.log('Connected express server at localhost...');
})