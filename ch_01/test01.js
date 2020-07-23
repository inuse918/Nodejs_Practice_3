//os: 코어 모듈

const os=require('os'); //os 모듈을 가져와 os에 대입함
console.log('os 타입: '+os.type());

//hostname()
console.log('os hostname: '+os.hostname());
//freemem()
console.log('os freemem: '+os.freemem());

const process=require('process');
//process 모듈 env속성
console.log(`process env: ${process.env()}`);
//process 모듈 versions 속성
console.log(`process version: ${process.version}`);
//platfrom 속성
console.log(`process platform: ${process.platform}`); 