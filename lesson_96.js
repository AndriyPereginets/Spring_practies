'use strict';

/* new RegExp('pattern', 'flags');
/patern/flags */

/* 
const ans = prompt('Enter you number');

const reg = /\d/g;
console.log(ans.match(reg)); */

const str = 'My name is R2D2';
console.log(str.match(/\w\d\w\d/i));
console.log(str.match(/\W/g));


// class
// \d 
// \ w
// \ s
/* i
g
m */

/* console.log(ans.search(reg)); */
/* console.log(ans.match(reg)); */

/* const pass = prompt('Enter password');

console.log(pass.replace(/./g, '*')); */

/* console.log('12-34-56'.replace(/-/g, ':')); */


