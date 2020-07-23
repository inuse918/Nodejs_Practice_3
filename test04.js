// // 1.
// var arr=new Array();
// var arr=[1,2,3,4,5];

// // 이름이 grades라는 객체
// // 객체는 중괄호로 시작함
// const grades={
//     'kim':10, // 따옴표를 하지 않아도 무관
//     'lee':30,
//     'park':50,
// }
// console.log(grades.kim,grades.lee);
// console.log(grades['lee']);

// console.dir(grades);

//2.
// const grades={}; // const grades=new Object(); 와 같은 뜻
// grades.kim=10;
// grades.lee=20;
// grades['park']=30;

// console.log(grades.kim,grades.lee,grades.park)

// //3. 생성자함수 이용. (생성자함수: 객체를 만듦과 동시에 값을 넣어주는 것)
// function Grades(name,score){
//     this.name=name;
//     this.score=score;
// }

// grades.prototype.walk=function(){
//     console.log('걷다');
// } 프로토타입에서 함수 쓸 때
// Grades('kim',10); //함수호출
// const kim=new Grades('kim',10); //객체생성
// const lee=new Grades('lee',50);

const grades={
    list:{
        name:'kim',
        age:30,
        height:180
    },
    show:
        function(){
            console.log('hello javascript');
        }
}
console.log(grades.list); //{ name: 'kim', age: 30, height: 180 }
console.log(grades.list.name);
grades.show(); //grades['show'](); 라고도 할 수 있음

const grades5={
    list:{
        name:'kim',
        age:30,
        height:180
    },
    show:function(){
        for(var key in this.list){ // for-in 리스트에서 key값을 key에 집어넣음.
            console.log(this.list[key]); //item에는 key가 들어가있음
        }
    }
}
grades5.show(); //list의 값들이 나오게