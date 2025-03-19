// import { name, age, greet } from './modules/01_named_export.js';

// console.log(name);
// console.log(age);
// console.log(greet());

//별칭

// import { name as userName, age as userAge } from './modules/01_named_export.js';

// console.log(userName);
// console.log(userAge);

//전부 가져오기
// import * as utils from './modules/01_named_export.js';

// console.log(utils.age);
// console.log(utils.name);
// console.log(utils.greet());

// default_export
// import addfunction from './modules/02_default_export.js';

// console.log(addfunction(4, 5));

import { name, age, greet } from './modules/03_exports.js';

console.log(name);
console.log(age);
console.log(greet());

//01, 02에서 import하는거 다 안됐음 03만 됐음
