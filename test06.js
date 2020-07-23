//1
// let sum;
// const score={
//     kor:90,
//     eng:90,
//     math:90
        // sum:function(){
        //     return this.kor+this.eng+this.math;
        // }
// }
// sum=score.kor+score.eng+score.math
// console.log(`sum: ${sum}`);
// console.log(`avg: ${sum/3}`);


//2
// const score={};
// score.kor=100;
// score.eng=100;
// score.math=100;

// score.sum=fucntion(){
//     return this.kor+this.eng+this.math;
// }
// sum=score.kor+score.eng+score.math
// console.log(`sum: ${sum}`);
// console.log(`avg: ${sum/3}`);

//3
function Score(kor,eng,math){
    this.kor=kor;
    this.eng=eng;
    this.math=math;
}
Score.prototype.sum=function(){
    return this.kor+this.eng+this.math;
}

const jumsu=new Score(50,50,50);

console.log(jumsu);
sum=jumsu.kor+jumsu.eng+jumsu.math;
console.log(`sum: ${sum}`);
console.log(`avg: ${sum/3}`);