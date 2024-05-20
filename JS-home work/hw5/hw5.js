// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let areaRectangle= function (a,b){
    return a * b;
}
console.log(areaRectangle(5,10))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let p =3.14
function areaCircle(r){
    return  p * (r*2);
}
console.log(areaCircle(7))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let areaCylinder=(r,h)=>{
    return 2*p*r*h;
}
console.log(areaCylinder(5,7))

// - створити функцію яка приймає масив та виводить кожен його елемент
let arrOne=[1,3,4,5,6,false,true,'good day'];
let arr=(array)=>{
    for (const item of array){
        console.log(item)
    }
    return array;
}
console.log(arr(arrOne))

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let article=(text)=>{
    document.write(`<p>${text}</p>`)
    return text
}
article('vagetable')

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
 let fn=(text)=>{
    document.write(`<ul>
                    <li>${text}</li>
                    <li>${text}</li>
                    <li>${text}</li>
                    </ul>`)
}
fn('room')

// / - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл
let f=(text,number,quantity)=> {
    for (let i = 0; i <number; i++) {
        document.write(`<${quantity}> ${text} ${number} </${quantity}>`)
    }
}
f('milk',3, 'li');

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
let f1=function (arrU) {
    for (const arrUElement of arrU) {
        document.write(`${arrUElement.id}-${arrUElement.name}-${arrUElement.age};`)
    }
    return f1
}
f1(arrayUser)

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let arrSwap=[11,22,33,44];
 swap=(arr,index1,index2)=>{
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
let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (const index of currencyValues) {
        if (index.currency === exchangeCurrency) {
            return sumUAH / index.value
        }
    }
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))