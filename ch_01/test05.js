const url = require('url');
const queryString=require('querystring'); //query 알고 싶을 때
const urlstr="https://search.naver.com/search.naver?sm=top_hty&fbm=0&ie=utf8&query=nodejs";

const curUrl=url.parse(urlstr);
console.log(curUrl);

// const curStr=url.format(curUrl);
// console.log(curStr);

const param=queryString.parse(curUrl.query);
console.log(param);
console.log(`검색어: ${param.query}`);
