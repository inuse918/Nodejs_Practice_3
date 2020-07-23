user=[
    {name:'kim',kor:80,eng:80,math:80},
    {name:'lee',kor:70,eng:70,math:70},
    {name:'kang',kor:60,eng:60,math:60}
]

//1.
user.forEach(function(value){
    console.log(value);
});

console.log("==============================================");
//2
for(let key in user){
    console.log(user[key]);
}
console.log("==============================================");
//3
for(let key of user){
    console.log(key);
}