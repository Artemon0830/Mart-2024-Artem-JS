// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function areaRectangle(a,b){
let result = a * b;
return result;
}
let res1=areaRectangle(10,15);
console.log(res1);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let p =3.14
function areaCircle(r){
  let result = p * (r*2);
    return result;
}
let res2=areaCircle(2)
console.log(res2)
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function areaCylinder(r,h){
    let result = 2*p*r*h;
    return result;
}
let res3 = areaCylinder(5,6) 
console.log(res3);
// - створити функцію яка приймає масив та виводить кожен його елемент
let arrOne=[1,3,4,5,6,false,true,'good day'];
function arr(array){
    for (const item of array){
        console.log(item)
    }
}
arr(arrOne);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function article(text){
    document.write(`<p>${text}</p>`)
}
article('hello')

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function fn(text){
    document.write(`<ul>
                    <li>${text}</li>
                    <li>${text}</li>
                    <li>${text}</li>
                    </ul>`)
}
fn('okey')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл
function f(text,number,quantity) {
     
    for (let i = 0; i <number; i++) {
        document.write(`<${quantity}> ${text} ${number} </${quantity}>`)
    }
}
f('red',3, 'li');
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function array(number,string,boolean){
    document.write(`${number} '${string}' ${boolean}`)
}
array(5,'helllooo',false)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arrayUser= [
    {id:2, name: 'vasya', age: 31},
    {id:3,name: 'petya', age: 30},
    {id:1,name: 'kolya', age: 29},
    {id:4,name: 'olya', age: 28},
    {id:5,name: 'max', age: 30},
    {id:6,name: 'anya', age: 31},
    {id:8,name: 'oleg', age: 28},
    {id:2,name: 'andrey', age: 29},
    {id:3,name: 'masha', age: 30},
    {id:7,name: 'olya', age: 31},
    {id:8,name: 'max', age: 31}
];
function f1(arrU) {
    for (const arrUElement of arrU) {
        document.write(`${arrUElement[0]} ${arrUElement[1]} ${arrUElement[2]}`)
    }
    // Підкажіть будь-ласка як виводити в документ, виводить Object
}
f1(arrayUser)


//
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let arrSwap=[11,22,33,44];
function swap(arr,index1,index2){
    let index =arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=index;
return arr;
}

console.log(swap(arrSwap,1,0))



// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let USD =[{currency:'USD',value:40}];
let EUR=[{currency:'EUR',value:42}];
function exchange(sumUAH,currencyValues,exchangeCurrency){
    for (const index of currencyValues) {
        console.log(index)
        for (const index11 of exchangeCurrency) {
            console.log(index11)
            if(index[0]===index11[0]){
                console.log()
            }
        }
    }
    currencyValues=sumUAH/index[1]
    return currencyValues;
   
}
exchange(10000,USD,EUR)
// далі я щось не зрозумів



