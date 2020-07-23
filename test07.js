const users=[
    {name:'kim',age:20},
    {name:'lee',age:30},
    {name:'park',age:40}
]
console.log(`users배열의 개수: ${users.length}`);
users.push({name:'ko',age:50});

let add=function(x,y){
    return x+y;
}
users.push(add); //뒤에 값 추가

// for(let value of users){
//     console.log(value);
// }

console.dir(users); // 객체의 구조를 확인함
//함수 접근 방법
console.log(users[4](10,20));