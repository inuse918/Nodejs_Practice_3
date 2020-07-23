const http=require('http');
const server=http.createServer();

server.listen(3000,()=>{
    console.log('Running at loaclhost... ...');
})

server.on('connection',()=>{
    console.log('connection 발생');
})

server.on('request',(req,res)=>{ // 콜백함수: 이벤트핸들러(이벤트 처리함)
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.write('<h1>hi nodejs</h1>');
    res.end();
    console.log('request 발생');
})