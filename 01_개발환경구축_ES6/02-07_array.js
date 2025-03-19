// 구조 분해 할당 - 배열에 적용

const animals = ['bear', 'tiger', 'giraffe', 'elephant', 'lion'];

// 이 배열에서 특정 값 몇개를 빼서 사용하고 싶을 때 구조분해 할당을 사용!

// 1. 기본적인 구조분해할당
// const [ani1, ani2, ani3] = animals;

// console.log(ani1, ani2, ani3);

// 2. 일부 요소 건너뛰기
// const [, ani2, , ani4] = animals;

// console.log(ani2, ani4);

// 3. 기본값 설정
const zoo = ['panda', 'koala'];
const [ani1, ani2, ani3 = 'monkey', ani4 = 'penguin'] = zoo;

console.log(ani1, ani2, ani3, ani4);

// 4. 중첩된 배열 구조 분해
const nestedArray = [1, [2, 3], 4];
// 배열 안에 또 배열이 있다

// const [num1, numArr, num2] = nestedArray;

//numArr도 배열이므로 한번 더 구조분해할당 할 수 있음

const [num1, [num3, num4], num2] = nestedArray;
console.log(num1, num3, num4, num2);
