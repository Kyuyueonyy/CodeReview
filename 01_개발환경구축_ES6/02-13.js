// let obj = { result: 0 };
// obj.add = function (x, y) {
//   function inner() {
//     this.result = x + y;
//   }
//   inner();
// };

// obj.add(3, 4);
// console.log(obj); //{ result: 0, add: [Function (anonymous)] }
// console.log(obj.result); // 0
// console.log(result); // 7 : 위에 this가 obj를 가리키는 것이 아니라 전역변수 result를 가리키고 있는것

//Javascript의 this 바인딩 문제
//일반 함수는 호출될 때 this가 전역 객체를 참조함

// 1. 화살표함수
// 화살표 함수
Obj.add = function (x, y) {
  const inner = () => {
    this.result = x + y;
  };
  inner();
};

obj.add(3, 4);
console.log(obj);

console.log(result); // 7

// 2. bind()
// 함수의 this 값을 특정 객체에 영구적으로 바인딩
// 첫번째 인자로 전달된 객체가 this로 설정됨
Obj.add = function (x, y) {
  const inner = () => {
    this.result = x + y;
  };
  inner.bind(this)();
};

obj.add(3, 4);
console.log(obj); //0

console.log(result); //7
