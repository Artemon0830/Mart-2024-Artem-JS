// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let user = document.forms.us;
user.onsubmit=function (e) {
    e.preventDefault()
    let name = user.name.value;
    let surname = user.surname.value;
    let age = user.age.value;
    let element = document.getElementById('click');
    element.innerText=JSON.stringify({name:name, surname:surname,age:age })
    document.body.appendChild(element)
}

