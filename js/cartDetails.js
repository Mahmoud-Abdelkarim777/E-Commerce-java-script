let badge = document.getElementById('badge');
let itemDom = document.getElementById('itemDom');
// let logout = document.getElementById('logout');

let proudects_1 = JSON.parse(localStorage.getItem("products_1")) || [];
let proudects_2 = JSON.parse(localStorage.getItem("products_2")) || [];
let proudects_3 = JSON.parse(localStorage.getItem("products_3")) || [];

let productId = localStorage.getItem("productId");
productId = parseInt(productId); 

let productDetails = proudects_1.find((item) => item.id === productId)
        || proudects_2.find((item) => item.id === productId)
        || proudects_3.find((item) => item.id === productId);

if (productId) {

    if (productDetails) {
        console.log("Product details:", productDetails);
    } else {
        console.log("Product not found.");
    }
} else {
    console.log("Product ID is missing.");
}


// num of badge
function updateBadge() {
    let products = localStorage.getItem('productsInItem');
    
    if (products) {
        let productCount = JSON.parse(products).length;
        badge.innerHTML = productCount;
    } else {
        badge.innerHTML = 0;
    }
}
updateBadge();

if (username) {
    logout.onclick = function () {
        localStorage.clear()
        setTimeout(() => {
            window.location = "register.html"
        }, 1500);
    }
} 

itemDom.innerHTML = `
            <div class="w-50">
                <img class="w-100" src="${productDetails.imageURL}" alt="photo">
            </div>
            <div>
                <h1>${productDetails.name}</h1>
                <p>${productDetails.price}</p>
                <p>${productDetails.title}</p>
                <p>Quantity: ${productDetails.qty}</p>
            </div>
`
