const express=require('express')
const app=express()
const PORT=3000;
const MongoClient=require('mongodb').MongoClient;
const url="mongodb://localhost:27017";
const dbname="test"; //사용하는 db 이름

let db; //데이터베이스 객체를 가리킬 변수
let login; // collection(테이블)을 가리키는 변수

//연결은 connect라는 메서드를 사용함.
MongoClient.connect(url,(err,client)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Connected to Mongo DB server');
        db=client.db(dbname);
        login=db.collection('login'); //table 생성
    }
})
app.listen(PORT,(req,res)=>{
    console.log('running...');
})