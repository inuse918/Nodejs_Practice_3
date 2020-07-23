const fs=require('fs');
// console.log('A');
// console.log('B');
// console.log('C');

// console.log('A');
// setTimeout(()=>{ // setTimeout: 몇 초 후에 함수를 실행
//     console.log('B');
// },2000);
// console.log('C');
// A C B

/******************************/
// console.log('A');
// const content=fs.readFileSync('./data.txt');
// console.log(content.toString());
// console.log('B');
// A content B

/**************************** */

// console.log('A');
// fs.readFile('./data.txt',(err,result)=>{   //따로 변수에 대입시키지 않는다.
//     if(err){console.log(err); return;}
//     console.log(result.toString());
//     console.log('B');
// })
// console.log('C');

/**************************** */
// writeFileSync, writeFile :overwrite data2.txt

// writeFile

const data=new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFile('data2.txt',(data,err)=>{
    if(err){console.log(err); return}
    console.log('saved!');
});