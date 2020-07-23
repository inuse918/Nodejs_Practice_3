// 1
// var vscope='global';

// function fscope(){
//     var vscope='local';
// }
// console.log(vscope); 
// 출력결과: global

// 2
// var vscope='global';
// function fscope(){
//     var vscope='local';
//     console.log(vscope);
// }
// fscope();
// console.log(`밖의 값: ${vscope}`);]
// 출력결과: local global

// 3
var vscope='global';
function fscope(){
    vscope='local'; //var 없이 선언했을 때는 전역변수로 된다. 
    // 이 전역변수가 위의 전역변수를 덮어씌움. 결론적으로 local이 된다.
    console.log(vscope);
}
fscope();
console.log(`밖의 값: ${vscope}`);


//1 23일때 홀수인지 짝수인지 판별
num=23;
if(num%2==0){
    console.log("짝수입니다.");
}else{
    console.log("홀수입니다.");
}
//2 1부터 100까지의 정수 중에서 4의 배수만 출력
for(let i=1;i<=100;i++){
    if(i%4==0){
        console.log(i);
    }
}

//3 100~999사이에 7의 배수 개수와 합
cnt=0;
sum=0;
for(let i=100;i<=999;i++){
    if(i%7==0){
        cnt++;
        sum+=i;
    }
}
console.log(`갯수: ${cnt} , 합계: ${sum}`);

//4 100~999사이에 4의 배수아닌 개수와 합
cnt=0;
sum=0;
for(let i=100;i<=999;i++){
    if(i%4!=0){
        cnt++;
        sum+=i;
    }
}
console.log(`갯수: ${cnt} , 합계: ${sum}`);

//5 1부터30까지 짝수와 홀수의 합을 각각 구하세요
sum1=0;
sum2=0;
for(let i=1;i<=30;i++){
    if(i%2==0){
        sum1+=i;
    }else {
        sum2+=i;
    }
}
console.log(`짝수: ${sum1}개, 홀수: ${sum2} 개`);

//6 오늘의 요일 출력
day=1;
switch(day){
case 1: 
    console.log("월요일");
    break;
case 2: 
    console.log("화요일");
    break;
case 3: 
    console.log("수요일");
    break;
case 4: 
    console.log("목요일");
    break;
case 5: 
    console.log("금요일");
    break;
case 6: 
    console.log("토요일");
default:
        console.log("일요일");
}
