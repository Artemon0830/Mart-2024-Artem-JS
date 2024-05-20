// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users=[];
users.push( new User(1, 'Vova', 'Vova', 'vova.@gmail.com', '8765432221'));
users.push(new User(2, 'Kolya', 'Kolyan', 'Kolya.@gmail.com', '87654456521'));
users.push(new User(3, 'Petya', 'piotr', 'Petya.@gmail.com', '85156556521'));
users.push(new User(4, 'Stepan', 'Step', 'Stepan.@gmail.com', '855564456521'));
users.push(new User(5, 'Mykola', 'Mykolych', 'Mykola.@gmail.com', '876331156521'));
users.push(new User(6, 'Max', 'Max', 'Max.@gmail.com', '252456521'));
users.push(new User(7, 'Yura', 'Yurik', 'Yura.@gmail.com', '876544222521'));
users.push(new User(8, 'Oleg', 'Olek', 'Oleg.@gmail.com', '87654456521'));
users.push(new User(9, 'Yuliia', 'Yulya', 'Yuliia.@gmail.com', '25554456521'));
users.push(new User(10, 'Semen', 'Sioma', 'Semen.@gmail.com', '87644456521'));
console.log('Масив з користовачами', users);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log('обєкти з парним id',users.filter(value => value.id % 2===0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log('id-по зростанню',users.sort((user1,user2) =>user2.id-user1.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order=order
    }
}
let clients=[];
clients.push( new Client(1, 'Vova', 'Vova', 'vova.@gmail.com', '8765432221',['fruit','vegetable','kiwi','fish']));
clients.push(new Client(2, 'Kolya', 'Kolyan', 'Kolya.@gmail.com', '87654456521',['fruit','vegetable','meat']));
clients.push(new Client(3, 'Petya', 'piotr', 'Petya.@gmail.com', '85156556521',['fruit','vegetable','cheese','crem']));
clients.push(new Client(4, 'Stepan', 'Step', 'Stepan.@gmail.com', '855564456521',['fruit','vegetable','milk']));
clients.push(new Client(5, 'Mykola', 'Mykolych', 'Mykola.@gmail.com', '876331156521',['fruit','vegetable','fanta']));
clients.push(new Client(6, 'Max', 'Max', 'Max.@gmail.com', '252456521',['fruit','vegetable','water','kokos']));
clients.push(new Client(7, 'Yura', 'Yurik', 'Yura.@gmail.com', '876544222521',['fruit','tomat']));
clients.push(new Client(8, 'Oleg', 'Olek', 'Oleg.@gmail.com', '87654456521',['fruit','vegetable','kinder']));
clients.push(new Client(9, 'Yuliia', 'Yulya', 'Yuliia.@gmail.com', '25554456521',['fruit','vegetable','fresh']));
clients.push(new Client(10, 'Semen', 'Sioma', 'Semen.@gmail.com', '87644456521',['fruit','vegetable','pepsi','cola']));
console.log('Масив з клыэнтами',clients)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// console.log(clients.sort((order1, order2) => order1.order - order2.order));
// -------я цього не знаю завдання-----




// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// - addDriver (driver-) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, year, speed, engine,driver){
    this.model=model;
    this.manufacturer=manufacturer;
    this.year=year;
    this.speed=speed;
    this.engine=engine;
    this.driver=driver;
    this.drive=function (){
       return `їдемо зі швидкістю ${this.speed} на годину`
    }
    this.info=function (){
        console.log('інформація про автомобіль',
            model-this.model,
            manufacturer-this.manufacturer,
            speed-this.speed,
            year-this.year,
            engine-this.engine
        )
    }
    this.increaseMaxSpeed=function(newSpeed){console.log ('зміна максимальної швидкості', this.speed+=newSpeed)}
    this.changeYear=function (newValue){
        console.log('змінює року випуску',this.year=newValue)}
    this.addDriver =function (driver){
        console.log('водій',this.driver=driver)}
    
}
let carVolskswagen=new Car('passat','Volkswagen',2006,250,2.0,);
console.log(carVolskswagen)
console.log(carVolskswagen.drive())
carVolskswagen.increaseMaxSpeed(10)
carVolskswagen.changeYear(2009)
carVolskswagen.addDriver({name:'Vasya'})


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// - addDriver (driver-) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class CarOne{
    constructor(model, manifacturer, speed, year, engine,driver) {
        this.model = model;
        this.manifacturer = manifacturer;
        this.speed = speed;
        this.year = year;
        this.engine = engine;
        this.driver=driver
    }
    drive (){

        console.log(`їдемо зі швидкістю ${this.speed} на годину`);
    }
    info (){
        console.log('інформація про автомобіль',
            'model'-this.model,
            'manufacturer'-this.manifacturer,
            'speed'-this.speed,
            'year'-this.year,
            'engine'-this.engine
        )
    }
    increaseMaxSpeed (newSpeed){
        console.log('зміна максимальної швидкості', this.speed = newSpeed);
    }
    changeYear (newValue){
        console.log('змінює року випуску',this.year = newValue);
    }
    addDriver (driver){
        console.log('водій',this.driver = driver);
    }
}
let opel =new CarOne('Astra','Opel',200,2001,'1.6 tdi')
console.log(opel)
opel.drive();
opel.info();
opel.increaseMaxSpeed(270)
opel.changeYear(2005)
opel.addDriver({name:'Vasya',age:19})

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella{


    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
const Cinderellas = [];
Cinderellas.push(new Cinderella('Yulia',18,39))
Cinderellas.push(new Cinderella('Katya',22,37))
Cinderellas.push(new Cinderella('Sveta',23,38))
Cinderellas.push(new Cinderella('Natalia',20,37))
Cinderellas.push(new Cinderella('Olga',18,40))
Cinderellas.push(new Cinderella('Tanya',27,41))
Cinderellas.push(new Cinderella('Olesia',17,40))
Cinderellas.push(new Cinderella('Maruna',21,39))
Cinderellas.push(new Cinderella('Oksana',19,42))
Cinderellas.push(new Cinderella('Lena',20,39))
console.log('Попелюшки',Cinderellas)
class Prince {

    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let prince= new Prince('Artem',22,1);
for (let i = 0; i < Cinderellas.length; i++) {
    if (Cinderellas.footSize === prince.shoe) {
        console.log('Попелюшка', Cinderellas);
    }
}

console.log(Cinderellas.find((random) => random.footSize === prince.shoe));

