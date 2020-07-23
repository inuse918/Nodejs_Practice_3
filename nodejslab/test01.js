const express=require('express');
const app=express();
const PORT=3000;

app.listen(PORT,(req,res)=>{
    console.log('server is running');
})
app.use((req,res,next)=>{ // req, res: 객체
    console.log('첫 번째 미들웨어 호출됨');
    req.user='kim';
    next();
})

app.use((req,res,next)=>{
    console.log('두 번째 미들웨어 호출됨');
    //res.send(req.user);
    // res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    // res.write('<h1>서버에서 보낸 응답</h1>');
    // res.end();

    const person={
        name:'kim',
        age:30
    }
    //res.send(person);
    //객체를 문자열로 변환하는 메서드
    let strPerson=JSON.stringify(person); //JSON을 문자열로 변환
    //res.send(strPerson); 
    // 한 블럭에서 res.send는 한 번밖에 사용할 수 없다.
    let objPerson=JSON.parse(strPerson);
    //res.send(objPerson);
    res.redirect('https://google.com');
})
