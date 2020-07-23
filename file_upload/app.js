const express=require('express');
const app=express();
const PORT=3000;
const multer=require('multer');
// const upload = multer({ dest: 'uploads/' })

app.set("views","./views");
app.set("view engine","pug");
app.locals.pretty=true;

var _storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    //   cb(null, file.fieldname + '-' + uniqueSuffix)
        cb(null,file.originalname);
    }
})
  
var upload = multer({ storage: _storage })
//multer가 저장 디렉토리와  파일 이름을 지정하기 위해서는 콜백함수를 실행한다.

app.post('/upload', upload.single('userfile'), (req, res)=>{
    res.send(req.file);
})

app.get('/upload',(req,res)=>{
     res.render('fileTest');
})
app.get('/',(req,res)=>{
    res.send('파일 업로드');
})
app.listen(PORT,()=>{
    console.log('running...');
})