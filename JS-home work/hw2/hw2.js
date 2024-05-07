// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let a = ['hello','true', 245, 'number','-300','world','lesson','happy', 'false','hp'
];
console.log(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title:'A Stranger in the Mirror',
    pageCount: 400,
    genre:'Detectives and Thriller',
}
let book2 = {
    title:'A Clash of Kings Book 2 of A Song of Ice and Fire',
    pageCount: 928,
    genre:'Fantastic or Fantasy',
    }
let book3 = {
    title:'A Christmas Carol (Collins Classics)',
    pageCount:112,
    genre: 'Classical'
    }
console.log(book1,book2,book3);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let books = {
    title:'Love and War in the Apennines',
    pageCount: 320,
    genre:'Historical',
    authors :[
        {name : 'Eric Newby',
        age: 86}
]
};
let books2 = {
    title:'A Marvelous Life: The Amazing Story of Stan Lee',
    pageCount:400,
    genre:'comic books',
    authors :[
        {name :'Danny Fingeroth',
        age:55}
    ]
};
let books3 = {
    title:'2010 Odyssey Two',
    pageCount:297,
    genre:'Science fiction and fantasy',
    authors :[
        {name : 'Arthur C Clarke',
        age: 90}
    ]
};
console.log(books,books2,books3);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name:'Artem', username:'ART', password:'qwerty'},
    {name:'Vasya', username:'Vas', password:'qazwsx'},
    {name:'Tolik', username:'Tolya', password:'242155'},
    {name:'Val', username:'V223', password:'fasag'},
    {name:'Sergo', username:'SSS', password:'red231'},
    {name:'Max', username:'Max', password:'maxiii'},
    {name:'Tom', username:'Tomi', password:'321lokk'},
    {name:'Fox', username:'foxxxx', password:'forrew'},
    {name:'Oleg', username:'olek', password:'ggggik'},
    {name:'Masha', username:'Mashka2024', password:'showw'},
    {name:'Kolya', username:'Kolyan', password:'kolaaaan234'}
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
console.log(users[10].password);
console.log(users[11].password);



// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let weather =[
  'day1: {morning:+5, afternoon:+15, evening:+8}',
  'day2: {morning:+1, afternoon:+30, evening:+7}',
  'day3: {morning:+9, afternoon:+24, evening:+9}',
  'day4: {morning:+7, afternoon:+27, evening:+5}',
  'day5: {morning:+4, afternoon:+25, evening:+3}',
  'day6: {morning:+8, afternoon:+23, evening:+6}',
  'day7: {morning:+7, afternoon:+14, evening:+5}'
]
console.log(weather);

// - Є змінна х, якій ви надаєте довільне числове значення.
    // Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x=5;
if (x===0){
    console.log('Вірно');
}
else {console.log('Невірно')}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let t =prompt('enter number for 0 fo 59');
if(t>0){
    console.log('firstTime');
}else if(t>=15){
    console.log('twoTime');
}else if(t>30){
    console.log('threeTime');
}else if(t>45){
    console.log('fourTime');
}else if (t>59){
    console.log(false)
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = prompt('enter number for 1 fo 31');
if(day>0){
    console.log('first');
}else if(day>10){
    console.log('two');
}else if (day>20){
    console.log('three');
}else if(day>31){
    console.log(false);
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let days= prompt('enter day');
switch (days) {
    case '1':
        console.log('Monday:weather');
        break;
    case '2':
        console.log('Tuesday:chicken');
        break;
    case '3':
        console.log('Wednesday:ball');
        break;
    case '4':
        console.log('Thursday:meat');
        break;
    case '5':
        console.log('Friday:cucuber');
        break;
    case '6':
        console.log('Saturday:head');
        break;
    case '7':
        console.log('Sunday:clean');
        break;
    default:
        console.log('????');
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
    // буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
//

let xx= prompt('');
if(xx===''){
    console.log('false');
}else if(xx==='0'){
    console.log('false');
}else if(xx===null){
    console.log('false');
}else if(xx===undefined){
    console.log('false');
}else {
    console.log('default')
}


// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray =[
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}]
if(coursesAndDurationArray[0]){
    console.log('??????')
}else if (coursesAndDurationArray[1]){
    console.log('Супер')
}else if (coursesAndDurationArray[2]){
    console.log('Супер')
}else if(coursesAndDurationArray[3]){
    console.log('???????')
}else if(coursesAndDurationArray[4]){
    console.log('Супер')
}else if (coursesAndDurationArray[5]){
    console.log('??????')}