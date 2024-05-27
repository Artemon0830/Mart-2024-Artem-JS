// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let ageNumber = document.getElementById('ageNumber');
let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    let age = ageNumber.value;
    if (age < 18) {
        alert('Вам менше 18 років');
    } else {
        alert('Вам є 18 !!! Супер ');
    }
});