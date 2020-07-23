console.log('1. for each문');
//1. for each() array객체에 있는 함수
const fruits=['apple','banana','grape'];
fruits.forEach(function(index,value){
    console.log(index,value); // 매개변수가 두 개일 때는 앞의 것이 값, 뒤의 값이 index
});// 매개변수가 함수로 들어가있음

console.log('2. for in문');
//2. for -in : 배열과 객체에 쓰임
const obj={
    name:'kim',
    age:30,
    height:180
}
for(var key in obj){ //for(key이름 in 객체이름) key이름은 for의 i...와 같은.. 느낌
    console.log(`key: ${key}, value: ${obj[key]}`);
}
// in 뒤의 객체에서 키값이 차례대로 name에 들어감
console.log('3. for of문');
//3. for -of
let arr=[10,20,30]; //배열은 객체이다.

for(let value of arr){ //of 뒤 객체에서 value값이 차례대로 들어감.
    console.log(value);
}

let str='foo'; //string도 객체이다.
//따라서 f,o,o 따로 출력됨.
for(let value of str){
    console.log(value);
}