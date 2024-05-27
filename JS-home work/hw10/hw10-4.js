// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
//     в масив sessions зберігається інформація про дату та час відвідування сторінки
//      Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно 
// відмалювати всю інформацію про відвідування сторінки index.html. 
//     Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
window.onload = function(){
let time = new Date();
let sessions = JSON.parse(localStorage.getItem('sessions')) ;
sessions.push(time);
localStorage.setItem('sessions', JSON.stringify(sessions));
}