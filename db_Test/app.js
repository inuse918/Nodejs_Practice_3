const express = require('express');
const app = express();
const PORT=3000;
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({
    extended:false
}))


//1. 몽구스를 이용한 연결
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
const url="mongodb://localhost:27017/test";
mongoose.connect(url);
let db=mongoose.connection;

db.once('open',()=>{
    console.log('mongodb Connected');
})

db.on('err',(err)=>{
    console.log('db 연결 에러');
})

//2. 스키마 생성
const person=mongoose.Schema({
    name:{type:'string',required:true,unique:true}, 
    //required: true -> not null, unique: ture -> unique (primary key)
    age:'number', //숫자는 number로 표현함
    addr:'string'
})

//3. 모델 생성
const Student=mongoose.model('student',person);


app.set('view engine','pug');
app.set('views','./views');
//4. 데이터 추가
app.get('/new',(req,res)=>{
    res.render('new');
})
app.post('/new',(req,res)=>{
    let _name=req.body.name;
    let _age=req.body.age;
    let _addr=req.body.addr;
    
    let data=new Student({
        name:_name,
        age:_age,
        addr:_addr
    });
    
    data.save((err,docs)=>{
        if(err){
            console.log(err);
        } else{
            console.log('saved');
            res.redirect('/'); //값을 넣은 뒤 리다이렉트함. , res.send()와 한 블럭안에서 같이 사용할 수 없다.
        }
    })
    //console.log(`${_name}, ${_age}, ${_addr}`);
})

app.get('/list',(req,res)=>{
    Student.find({},(err,result)=>{
        if(err){
            console.log(err);
            return;
        }else{
            res.render('list',{docs:result});
        }
    })
})
//student.fide({},(err,result)=>{}) --> 다 가져오기
//student.fide({name:kim}) --> name이 kim인사람만

app.get('/edit',(req,res)=>{
    res.render('edit')
})

app.post('/edit',(req,res)=>{
    let _name=req.body.name;
    let _age=req.body.age;
    let _addr=req.body.addr;

    Student.findOne({name:_name},(err,result)=>{
        if(err){
            console.log(err);
            return;
        }else{
            result.name=_name;
            result.age=_age;
            result.addr=_addr;

            result.save((err,docs)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log('updated');
                    res.redirect('/list');
                }
            })
        }
    })
})

app.get('/',(req,res)=>{
    res.send('Hi mongo');
})
app.listen(PORT,(req,res)=>{
    console.log('server is running...');
})