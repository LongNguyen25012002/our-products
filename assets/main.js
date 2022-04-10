let wrapProducts = document.querySelector('.wrap-products');
let loadingTag = document.createElement('div')
    loadingTag.className = "dots-loading"
    loadingTag.innerHTML =
     `<div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>`
let app = {
    async getAPI(){
        let url = "https://course-api.com/javascript-store-products";
        wrapProducts.appendChild(loadingTag);
        try{
            const respon = await fetch(url)
            const produts = await respon.json();
            renderUI(produts);
        } 
        catch(erron){
            console.log(erron);
        }
    },
    start(){
        this.getAPI()
    }
}
app.start();

let renderUI = (data__) =>{
    console.log(data__)
    const productsList = data__.map(product => {
        let price = product.fields.price / 100;
        let {id} = product;
        return ` 
        <a class="card" href="./product details/productDetails.html?id=${id}">
        <img src="${product.fields.image[0].url}" alt="">
        <h2 class="product-name">${product.fields.name}</h2>
        <p class="product-price">$${price}</p>
        </a>`
    })
        wrapProducts.innerHTML = productsList.join(' ');
}