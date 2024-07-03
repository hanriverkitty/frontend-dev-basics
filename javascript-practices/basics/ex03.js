/* null과 undefined */

var myVar1 = undefined; // 명시적으로 undefined 대입
var myVar2; // 암시적으로 undefined 대입
var myVar3 = null;

console.log(myVar1 + ": " + myVar2 + ": " + myVar3);

// undefined 와 null 의 동치(equal)성 비교
console.log(myVar1 == myVar3); // 값비교
console.log(myVar1 === myVar3); // 타입비교 + 값비교

console.log("==========================");
// == : equaliity, 값의 동치성
console.log("4" == 4);
console.log(false == 0);
console.log("abc" == new String("abc"));

console.log(true + 10); // 11
console.log("abc" + new String("abd"));
console.log(1 + "11"); // 111
console.log("11" + 1); // 111

console.log("==========================");
// ===
// 1. 타입의 동일성
// 2. 타입이 같은 경우
//    2-1. primitive type: 값의 동일성
//    2-2. object type: 객체의 동일성
console.log("4" === 4); // 1번 위배
console.log(1 === true); // 1번 위배
console.log("abc" === new String("abc")); // 1번 위배
console.log(4 === 2); // 2-1 위배
console.log(new Number(10) === new Number(10));
