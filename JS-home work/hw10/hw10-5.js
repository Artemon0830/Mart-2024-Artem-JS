// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
class User{
    constructor(name,surname,id,age){
    this.name=name
    this.surname=surname
    this.id=id
    this.age=age
}
}
const users = [];
for (let i = 0; i < 100; i++) {
    users.push(new User(`Artem${i + 1}`, `Art${i+1}`, i + 1,i+2))}
console.log(users)
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let slice1 = users.slice(0,10);
function userTen() {
    let wrap = document.getElementById('wrap');
    for (let i = slice1; i < users.length; i++) {
        const userDiv = document.createElement('div');
        userDiv.innerText = `name: ${users[i].name}, surname: ${users[i].surname}, id: ${users[i].id}, age: ${users[i].age}`;
        wrap.appendChild(userDiv);
    }
}

next.addEventListener('click',function () {
    if (slice1<users.length){
        slice1++;
    }
})

prev.addEventListener('click',function () {
    if (slice1>0){
        slice1--
    }
})
window.onload=userTen;