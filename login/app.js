const express=require('express');
const app=express();
const PORT=3000;
const bodyParser=require('body-parser');
const fs=require('fs');

app.set("views","./views");
app.set("view engine","pug");
app.locals.pretty=true;

app.use(bodyParser.urlencoded({
    extended:false
}))

// 사람들 정보의 리스트 가져옴
app.get('/information',(req,res)=>{
    fs.readdir('./data',(err,infoList)=>{
        if(err){
            console.log(err);
        } else {
            res.render('printInfoList',{
                _infoList:infoList
            })
        }
    })
})

// 리스트를 누르면 안의 정보를 출력함
app.get('/information/:id',(req,res)=>{
    const _id=req.params.id;
    fs.readFile('./data/'+_id,(err,contents)=>{
        res.render('printInfoContents',{
            _contents:contents
        })
    })
})

app.get('/register',(req,res)=>{
    res.render('register_form');
})

app.post('/register',(req,res)=>{
    let _name=req.body.name;
    // let _r_id=req.params.r_id;
    // let _email=req.params.email;
    // let _r_pwd=req.params._r_pwd;
    
    var _info=`${_name}, ${req.body.r_id}, ${req.body.email}, ${req.body.r_pwd}`

    fs.writeFile('./data/'+_name,_info,(err)=>{
        if(err){
            console.log(err);
        }
        console.log("등록되었습니다.");
    })
    res.redirect('/');
})


app.get('/register',(req,res)=>{
    res.render('register_form');
})

app.post('/login/:id:pwd',(req,res)=>{
    let _id=req.body.id;
    let _pwd=req.body.pwd;

    if(_id==kim&&_pwd==1111){
        res.send('로그인되었습니다.');
    }
})

app.get('/login/:id:pwd',(req,res)=>{

})

app.get('/login',(req,res)=>{
    res.render('login_form')
})

app.get('/',(req,res)=>{
    res.render('root')
})

app.listen(PORT,()=>{
    console.log('server is running...');
})