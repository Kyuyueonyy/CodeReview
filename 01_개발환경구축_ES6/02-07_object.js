// 구조 분해 할당 - 객체에 적용

// const user = {
//   name: 'Alice',
//   age: 25,
//   job: 'Developer',
// };

// 1. 객체 구조분해할당
// const { name, age } = user;

// console.log(name);
// console.log(age);
//Alice 25

//만약 구조분해할당 순서 바꾸면?

// const { age, name } = user;

// console.log(name);
// console.log(age);
// Alice 25
// 순서 바꿔도 name에 Alice 출력!

// 2. 변수 이름 변경 (별칭 지정)
// const { name: userName, job: profession } = user;

// console.log(userName);
// console.log(profession);

// // 3. 기본값 설정
// const { salary = 5000, age: userAge = 30 } = user;
// console.log(salary);
// console.log(userAge);
// 5000 25(기본값을 출력함) ???? 30을 출력해야하는거아닌가 기본값을 30으로설정한거아닌가

// 4. 중첩된 객체 구조 분해
const person = {
  name: 'Bob',
  info: {
    address: 'Seoul',
    hobbies: ['reading', 'coding'],
  },
};

//Q : 구조분해할당을 통해 이름과 첫번째 취미를 출력하시오.

// -1 : const { name, info } = person; 객체 구조분해할당
// -2 : const { name, info:{address, hobbies} } = person;

const {
  name,
  info: {
    address,
    hobbies: [firstHobby, secondHobby],
  },
} = person;

console.log(`이름: ${name}, 첫번째 취미 : ${firstHobby}`);
