
// console.log(users.length);
// users.push({name:'kang',age:40});

// users.pop();
// for (let value of users){
//     console.log(value);
// }
// users.forEach(function(value,index){
//     console.log(`index: ${index}, value: ${value}`);
// })

// users.unshift({name:'ko',age:25});
// console.dir(users);

// users.shift();
// console.dir(users);

// users.push(function pr(){
//     console.log('hello nodejs');
// })
// users.pr;

// delete users[1];
// console.dir(users);

// users.forEach(function(index,value){
//     console.log('index: '+ index+ 'value: ' value.name);
// })

const users=[
    {name:'kim',age:20},
    {name:'lee',age:30},
    {name:'park',age:40},
]
// splice(index,removeCount,[object])
// users.splice(1,0,{name:'seo',age:35});
// console.dir(users);

// users.splice(2,1);
// console.dir(users);

//slice : 새로운 배열 만듦
const users2=users.slice(1,2); 
console.dir(users);
console.dir(users2);