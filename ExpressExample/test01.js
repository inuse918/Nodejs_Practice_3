//const http=require('http');

// //서버 객체 생성
// const server=http.createServer();

// //서버 실행(listen(포트번호, 콜백함수))
// server.listen(3000,()=>{
//     console.log('Running Web Server at localhost... ...');
// });

//2. request, connection 이벤트 활용 -> 응답 없음
// const server=http.createServer();
// server.on('request',()=>{
//     console.log('request 이벤트 발생');
// })
// server.on('connection',()=>{
//     console.log('connection 이벤트 발생');
// })
// server.listen(3000,()=>{
//     console.log('Running at localhost... ...');
// })

//3. request이벤트가 발생했을 때 이벤트핸들러의 매개변수로 '요청'과 '응답'을 주어야 한다.

const server = http.createServer();
server.on('request',(req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.write('<h1>Hello nodejs</h1>');
    res.end();
}) // request 요청이 들어왔을 때 응답을 보내주어야 함. 그게 바로 function(req,res){}이다. <=이벤트 핸들러
server.listen(3000,()=>{
    console.log('Running at localhost... ...');
})

//4. 실제 사용하는 웹 서버
// const http=require('http');
// const server = http.createServer();
// server.on