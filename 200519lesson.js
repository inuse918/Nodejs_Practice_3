//1. 
const car={
    car_name:"",
    car_owner:"",
    car_color:"",
    car_price:"",
    speedUp: function(){
        console.log("속도가 빨라짐");
    },
    speedDown:function(){
        console.log("속도가 느려짐");
    },
    carList:{
        name:"안녕",
        age:"2000년",
    }
}


//2. 
const car2={}
car2.car_name;
car2.car_owner;
car2.car_color;
car2.car_price;
car2.speedUp=()=>{
    console.log("속도가 빨라짐2");
}
car2.speedDown=()=>{
    console.log("속도가 느려짐2");
}


//3. 
function car3(car_name,car_owner,car_color,car_price){
    this.car_name="차이름";
    this.car_owner="차주";
    this.car_color="차 색";
    this.car_price="차 가격";
}
car3.prototype.speedUp=function(){
    console.log("속도가 빨라짐3");
}
car3.prototype.speedDown=function(){
    console.log("속도가 느려짐3");
}

let car3_3=new car3();
//car3_3.speedDown();


// 이름 출력 (forEach)
const name=['유채린','이상연','김도영'];
name.forEach((index,value)=>{
    console.log(index,value);
});

// 김도영 정보 (for in)
const doyoung={
    name: 'kim do young',
    age:25,
    job:'singer'
}
for(let key in doyoung){
    console.log(`${key}: ${doyoung[key]}`);
}

// 이름 출력2 (for of)
const name2=['이재현','김영훈','이주연'];
for(let value of name2){
    console.log(value);
}

const calculate={
    add:(x,y)=>{
        return x+y;
    },
    sub:(x,y)=>{
        return x-y;
    },
    mul:(x,y)=>{
        return x*y;
    },
    div:(x,y)=>{
        return x/y;
    }
}
console.log(calculate.add(1,2));
console.log(calculate.sub(2,1));
console.log(calculate.mul(2,3));
console.log(calculate.div(10,5));

let callbackEx=(a)=>{
    a();
}
let test=()=>{
    console.log("callback()");
}
callbackEx(test);

