const express=require('express');
const app=express();
const fs=require('fs');
const bodyParser=require('body-parser');
const PORT=3000;

app.set("views","./views");
app.set("view engine","pug");
app.locals.pretty=true;


app.get('/subject',(req,res)=>{
    fs.readdir('./data',(err,files)=>{
        if(err){
            console.log(err);
        } else{
            res.render('view',{
                docs:files
            })
        }
    })
})

app.get('/subject/new',(req,res)=>{
    fs.readdir('./data',(err,files)=>{
        if(err){
            console.log(err);
        } else{
            res.render('new',{
                docs:files
            })
        }
    })
})

app.use(bodyParser.urlencoded({
    extended:false
}))

app.post('/subject/new',(req,res)=>{
    let _title=req.body.title;
    let _desc=req.body.desc;
    
    fs.writeFile('./data/'+_title,_desc,(err)=>{
        if(err){
            console.log(err);
        }
        console.log('정상적으로 등록되었습니다.');
    })
    res.redirect('/subject');

    //2. const data=
    // {
    //     _title:req.body.title,
    //     _desc:req.body.desc
    // }

    //3. 
    // const a=req.body;
    // const _title=a.title;
    // const _desc=a.desc;
})

app.get('/subject/:id',(req,res)=>{
    const _title=req.params.id;
    fs.readdir('./data',(err,files)=>{
        if(err){
            console.log(err);
        }
        fs.readFile('./data/'+req.params.id,(err,data)=>{
            if(err){
                console.log(err);
            }else{
                res.render('view',{content:data,_title:_title,docs:files})
            }
        })
    })
    
})

app.post('/subject/:id',(req,res)=>{
    
})

app.listen(PORT,()=>{
    console.log('server is running... ');
})