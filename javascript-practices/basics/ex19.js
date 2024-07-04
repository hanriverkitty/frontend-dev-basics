/*
전역 객체 (global object)
전역 변수와 전역 함수는 없다. 전역객체의 속성이다
전역객체 global 의 속성

node : global
browser : window

node는 전역 범위가 있다 browser 는 전역범위가 없다
*/

var i = 10; //global.i

global.n = "둘리";
console.log(global.n, n);

var email = "dooly@gmail.com";
console.log(global.email, email);
