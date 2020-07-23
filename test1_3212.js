//1.
let user={
    name: 'kim',
    age:20,
    show:function(){
        return `name : ${this.name} age : ${this.age}`;
    }
}
console.log(user.show());

//2.
const user2={};
user2.name='lee';
user2.age=30;
user2.show=function(){
    return `name : ${this.name} age : ${this.age}`;
}
console.log(user2.show());

//3.
function user3(name,age){
    this.name=name;
    this.age=age;
}
user3.prototype.show=function(){
    return `name : ${this.name} age : ${this.age}`;
}
const info=new user3('kang',30);
console.log(info.show());
