/*
Array 객체 함수:  Array.prototype. *
*/

var colors = ["red", "blue", "yellow"];
var fruits = ["blueberry", "mango", "dragonfruit"];

// concat
console.log("=== concat ======");
var a1 = fruits.concat(colors);
console.log(a1);

// pop, push: stack 지원
console.log("\n=== stack 지원 ======");
var color = colors.pop();
console.log(color);

colors.push("green");
console.log(colors);

// join
console.log("\n=== join ======");
var s = fruits.join(":");
console.log(s);

// reverse
console.log("\n=== reverse ======");
console.log(fruits);
fruits.reverse();
console.log(fruits);

// shift
console.log("\n=== reverse ======");
var numbers1 = [1000, 3000, 2000, 5000, 4000, 8000];
var number = numbers1.shift();
console.log(number, numbers1);

// slice
console.log("\n=== slice ======");
// 3 미포함
var number2 = numbers1.slice(1, 3);
console.log(number2);
console.log(numbers1);

// splice
// splice: 1. index 에서 count 개를 삭제하고 삭제된 요소를 배열에 담아 반환
console.log("\n=== splice(index, count) ======");

console.log(fruits);
var fruits2 = fruits.splice(0, 2);
console.log(fruits2, fruits);

// splice: 2. index 에서 count 개를 삭제하고 replace 대체한 후, 삭제된 요소를 배열에 담아 반환
console.log("\n=== splice(index,count,replace) ======");
var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 3, 10);
console.log(a2, a1);

// splice: 3. removeAt() 처럼 동작
console.log("\n=== removeAt() ======");
var a3 = [0, 1, 2, 3, 4];
a3.splice(2, 1); // removeAt(2)
console.log(a3);

// splice 4. insertAt() 처럼 동작
console.log("\n=== insertAt ======");
var a4 = [0, 1, 3, 4, 5];
a4.splice(2, 0, 2); // insertAt(2,2)
console.log(a4);
