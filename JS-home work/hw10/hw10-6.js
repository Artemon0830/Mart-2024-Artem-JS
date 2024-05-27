// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let number = document.getElementById('number');
let num = localStorage.getItem('num')
 num = 1;
window.onload = function () {
    num++
    localStorage.setItem('num',num)
    number.innerText = num
}
