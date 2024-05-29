// взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
let cartsBlock = document.getElementsByClassName('carts')[0];

let baseUrl='https://dummyjson.com'
let getCarts = baseUrl + '/carts'
let url = new URL(getCarts);

fetch(url)
.then(value => value.json())
    .then(({carts})=>{
        console.log(carts)
        for(const cart of carts) {
            let divProductsContainer = document.createElement('div');
            for (const product of cart.products){
                console.log(product)
                let divDescription = document.createElement('div');
                divDescription.innerText=`Id: ${product.id}, Title: ${product.title},Total:${product.total} Price: ${product.price} $`
                divProductsContainer.appendChild(divDescription);
                let divImagesContainer = document.createElement('div');
                let img = document.createElement('img');
                divProductsContainer.appendChild(divImagesContainer)
                img.src=product.thumbnail
                divImagesContainer.appendChild(img)
                divProductsContainer.appendChild(divImagesContainer)
            }
            cartsBlock.appendChild(divProductsContainer);


    }})







