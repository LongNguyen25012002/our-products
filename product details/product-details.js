
let url = "https://course-api.com/javascript-store-single-product";
let detailsContent = document.querySelector('.details-content');
async function getFetch(){
    try{
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');

        let respon = await fetch(`${url}?id=${id}`);
        let product = await respon.json();
        return product;
    }
    catch(erron){
        console.log(erron)
    }
}

let displayProduct = (data__) => {
    let productHTml = ` 
    <span><img src="${data__.fields.image[0].url}" alt="" class="image-product"></span>
    <div class="details-product">
        <h2 class="product-name_details">${data__.fields.name}</h2>
        <p class="company">Marcos</p>
        <p class="price">$${data__.fields.price / 100}</p>
        <div class="select-color">
            <div class="recicle recicle--red"></div>
            <div class="recicle recicle--blue"></div>
        </div>
        <p class="primary-infor">${data__.fields.description}</p>
        <button class="btn-add">Add to cart</button>`
        detailsContent.innerHTML = productHTml;
}

let start = async () => {
    let data = await getFetch();
    displayProduct(data);
}

start();

