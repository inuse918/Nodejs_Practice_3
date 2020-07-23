//EventEmitter를 상속받는다. process 객체(nodejs 의 전반적인 환경설정을 가짐. 기본적으로 eventemitter를 상속받는다.)
//1. 기존에 있는 이벤트 사용(exit)
process.on('exit',(code)=>{
    console.log('bye nodejs');
    console.log(code);
});
console.log('실행 중입니다.');

//2. tick이라는 사용자 정의 event를 만듦 -> EventEmitter 상속받기
const EventEmitter=require('events'); //EventEmitter를 가지고 온다. EventEmitter는 클래스.
const customEmitter=new EventEmitter(); //EventEmitter객체를 생성함

customEmitter.on('tick',()=>{
    console.log('tick 이벤트 발생');
})
customEmitter.emit('tick');
