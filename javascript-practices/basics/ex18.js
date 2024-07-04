/*
클로저(closure): 함수가 정의될 때 그 함수와 변수 스코프와의 조합
1. 클로저는 자신이 생성될 때의 스코프를 기억하는 함수
2. 클로저는 함수가 자신이 정의될 때 스코프를 기억하며 자신이 정의 될 때의 스코프 밖에서 호출되어도 그 스코프의 접근할 수 있는 함수를 의미
3. 왜 쓰냐?
    - 상태 유지 ex) react's useState
    - 전역 변수 회피
*/

/* Lexical Scope */
var f1 = function () {
  var s = "hello world";
  var inner = function () {
    console.log(s);
  };
  inner();
};

f1();

/* closure */
var f2 = function () {
  var s = "hello world";
  var inner = function () {
    console.log(s);
  };
  return inner;
};

var closure = f2();
closure();
