
let usersBlock = document.getElementsByClassName('users')[0];
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        console.log(users)
        for (let user of users) {
            let divElement = document.createElement('div');
            divElement.className='usersIndex'
            let idNameUser = document.createElement('h3');
            idNameUser.innerText=`id:${user['id']} ;  name:${user['name']}`;
            divElement.appendChild(idNameUser)
            let userLink = document.createElement('a');
            divElement.appendChild(userLink)
            userLink.href=`user-details.html?id=${user['id']}`
            userLink.innerText=`DETAILS`
            userLink.addEventListener('click', () => {
                localStorage.setItem('user', JSON.stringify(user));
            });
            usersBlock.appendChild(divElement);
        }
      
    })
