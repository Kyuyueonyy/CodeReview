let msg = 'GLOBAL';
function outer() {
  let msg = 'OUTER';
  console.log(msg);
  if (true) {
    let msg = 'BLOCK';
    console.log(msg);
  }
}

console.log(msg);

outer();

//ctrl alt n : cmd창 실행 단축키(coderunner 확장 설치)
