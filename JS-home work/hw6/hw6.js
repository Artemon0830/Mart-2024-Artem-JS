// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let oneStr= 'hello world';
console.log(oneStr.length)
let twoStr= 'lorem ipsum';
console.log(twoStr.length)
let threeStr='javascript is cool';
console.log(threeStr.length);

// Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(oneStr.toUpperCase())
console.log(twoStr.toUpperCase())
console.log(threeStr.toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log(oneStr.toLowerCase())
console.log(twoStr.toLowerCase())
console.log(threeStr.toLowerCase())

// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str =' dirty string'
console.log(str)
// console.log(str.length)
// console.log(str.indexOf('d'))
// console.log(str.indexOf('g'))
console.log(str.substring(1,12))

//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let strSp = 'Ревуть воли як ясла повні'
function stringToarray(str) {
    return str.split(' ')
}
let arr=stringToarray(strSp)

console.log(arr);

//
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];

let ascending= nums.sort(function (a, b){
    return  a-b;
})
console.log(ascending)
let descending=nums.sort(function (a, b){
    return  b-a;
})
console.log(descending)

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let array = [10,8,-7,55,987,-1011,0,1050,0];
let mapO = array.map(value =>  value.toString());
console.log(mapO)



// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсоати ртувйого за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// */

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log('Сортування за спаданням за monthDuration', coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));

console.log(' відфільтрування , залишивши тільки курси з тривалістю більше 5 місяців', coursesAndDurationArray.filter((item) => item.monthDuration > 5))
console.log('допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}',coursesAndDurationArray.map((index) => {
    return {
        id: coursesAndDurationArray.indexOf(index),
        title: index.title,
        monthDuration: index.monthDuration
    }
}));

// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }


let cardSuit = ['spade', 'diamond', 'heart', 'clubs'];
let values = ["6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
let color=[ 'red','black']
let cards= cardSuit.reduce((acc, card) =>{
    values.forEach(item=>{
        color=(card==='diamond'|| card==='heart')?'red':'black';
        acc.push({
        cardSuit:item,
        value:card,
        color:color
        })
    })
    return acc;
},[])
console.log('колода карт',cards);
// - туз піка
console.log('туз піка',cards.find((card) => card.cardSuit === 'ace'))
 // - всі шістки
console.log('всі шістки',cards.filter((card) => card.cardSuit === '6'));
// - всі червоні карти
console.log('всі червоні карти',cards.filter((card) => card.color === 'red'));
// - всі буби
console.log('всі буби',cards.filter((card) => card.value === 'diamond'));
// - всі трефи від 9 та більше
console.log( 'всі трефи від 9 та більше', cards.filter((card) => card.value === 'clubs' && values.indexOf(card.cardSuit)>=3));
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
 const callback=function (acc,card){
     if(card.value==='spade'){
         acc[0].push(card)
     }else if(card.value==='diamond'){
         acc[1].push(card)
     }else if(card.value==='heart'){
         acc[2].push(card)
     }else if(card.value==='clubs'){
         acc[3].push(card)
     }
     return acc;
 }
 let reduse=cards.reduce(callback,[[],[],[],[]]);
console.log('упакувати всі карти по "мастях" в обєкт', reduse)

// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
const coursesArray = [
    {
        title: "JavaScript Complex",
        monthDuration: 5,
        hourDuration: 909,
        modules: [
            "html",
            "css",
            "js",
            "mysql",
            "mongodb",
            "react",
            "angular",
            "aws",
            "docker",
            "git",
            "node.js"
        ]
    },
    {
        title: "Java Complex",
        monthDuration: 6,
        hourDuration: 909,
        modules: [
            "html",
            "css",
            "js",
            "mysql",
            "mongodb",
            "angular",
            "aws",
            "docker",
            "git",
            "java core",
            "java advanced"
        ]
    },
    {
        title: "Python Complex",
        monthDuration: 6,
        hourDuration: 909,
        modules: [
            "html",
            "css",
            "js",
            "mysql",
            "mongodb",
            "angular",
            "aws",
            "docker",
            "python core",
            "python advanced"
        ]
    },
    {
        title: "QA Complex",
        monthDuration: 4,
        hourDuration: 909,
        modules: ["html", "css", "js", "mysql", "mongodb", "git", "QA/QC"]
    },
    {
        title: "FullStack",
        monthDuration: 7,
        hourDuration: 909,
        modules: [
            "html",
            "css",
            "js",
            "mysql",
            "mongodb",
            "react",
            "angular",
            "aws",
            "docker",
            "git",
            "node.js",
            "python",
            "java"
        ]
    },
    {
        title: "Frontend",
        monthDuration: 4,
        hourDuration: 909,
        modules: [
            "html",
            "css",
            "js",
            "mysql",
            "mongodb",
            "react",
            "angular",
            "aws",
            "docker",
            "git",
            "sass"
        ]
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass

console.log("об'єкти, в який в modules є sass", coursesArray.filter((item) => item.modules.includes("sass")));

// --написати пошук всіх об'єктів, в який в modules є docker
console.log("об'єкти, в який в modules є docker", coursesArray.filter(item => item.modules.includes("docker")));
