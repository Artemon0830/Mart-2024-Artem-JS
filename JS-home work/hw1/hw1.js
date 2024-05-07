// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

let a1 = 'hello';
console.log(a1);
let a2 = 'owu';
console.log(a2);
let a3 = 'com';
console.log(a3);
let a4 = 'ua';
console.log(a4);
let b1 = 1;
console.log(b1);
let b2 = 10;
console.log(b2);
let b3 = -999;
console.log(b3);
let b4 = 123;
console.log(b4);
let b5 = 3.14;
console.log(b5);
let b6 = 2.7;
console.log(b6);
let b7 = 16;
console.log(b7);
const c1 = true;
console.log(c1);
const c2 = false;
console.log(c2);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Artem'
let midleName = 'Maksymuk'
let lastName = 'Ivanovich'
let person  = ` ${midleName} ${firstName} ${lastName}`;
console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;
console.log(typeof a,b,c);

// -----additional task------ За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let name = prompt('Enter your name','Artem');
console.log(name);
let lastName1 = prompt('Enter your LastName','Ivanovich');
console.log(lastName1);
let year = +prompt('Enter your year of birth','30-08-1996');
console.log(year);

