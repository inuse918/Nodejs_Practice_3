let sort=(cb)=>{
    cb();
}

let b=()=>{
    console.log('hello callback');
}
sort(b); // sort함수를 호출하는데 매개변수로 함수를 넘김. 이때의 함수를 callback 함수라고 한다.
// 여기서 callback함수는 b임.
// 자동으로 호출된다.

sort(function(){console.log('hello callback2')});

sort(()=>{
    console.log('hello callback2');
})