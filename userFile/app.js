const express=require('express');
const app=express();
const PORT=3000;
const multer=require('multer');
const upload=multer()

app.set('views','./views');
app.set('view engine','pug');
app.locals.pretty=true;

app.post('/upload',upload.single('userfile'),(req,res)=>{
    req.send(req.file); //json 파일 형식으로 전달됨
})
app.get("/upload",(req,res)=>{
    res.render('fileUpload');
})
app.get('/',(req,res)=>{
    res.send('루트');
})
app.listen(PORT,()=>{
    console.log('running..');
})