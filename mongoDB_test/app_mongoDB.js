const express=require('express');
const app=express();
const PORT=3000;
const mongoose=require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
const url="mongodb://localhost:27017/test";
mongoose.connect(url);
let db=mongoose.connection;

db.once('open',()=>{
    console.log('DB connected');
})
db.on('error',(err)=>{
    console.log('DB connection error');
})

const login=mongoose.Schema({
    id:'number',
    uid:'string',
    passwd:'string'
})

const Student=mongoose.model('student',login);