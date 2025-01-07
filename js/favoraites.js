let signin = document.getElementById("signin");
let signup = document.getElementById("signup");
let wellcome = document.getElementById("wellcome");
let badge = document.getElementById("badge");
let noProductsDom  = document.getElementById("no_products");

let productsDom_1 = document.getElementById("products");

let username = localStorage.getItem("username");

if (username) {
    signin.style.display = "none";
    signup.style.display = "none";
}
function showname() {
    if (username) {
        wellcome.innerHTML= `
        <p class=" m-0 mb-3" id="wellcome">Hi ! ${username}</p>
        `
    }
}
showname();
function drawFavoraitesProductsUI(allProducts_1 = []) {
    if(JSON.parse(localStorage.getItem("productsFavorite")).length === 0){
        noProductsDom.innerHTML = "There are no items yet !!!!"
    }

    let products_1 = JSON.parse(localStorage.getItem("productsFavorite")) || allProducts_1;

    let data_1 = products_1.map((item)=>{
        return`
        
        <div class="d-flex mb-3 mt-3" >
                <div class="w-50">
                    <img src="${item.imageURL}" class="w-50" alt="photo">
                </div>
                <div>
                    <p>
                        <strong>${item.name}</strong> <br>
                        ${item.price} <br>
                        <del>${item.discount}</del> <br>
                        <span>Quantity: ${item.qty} </span><br>
                        <button type="button" class="btn btn-success" id = "addCart" >remove From Favorite</button>
                    </p>
                </div>
            </div>
        `;
    });
    productsDom_1.innerHTML = data_1;

    badge.innerHTML = data_1.length
}
drawFavoraitesProductsUI();

// function removeFromCart(id) {
//     let productsFavorite = localStorage.getItem("productsFavorite");

//     if (productsFavorite) {
//         let items = JSON.parse(productsFavorite);
//         let filteredItems =items.filter((item) => item.id !== id );
//         localStorage.setItem("productsFavorite" , JSON.stringify(filteredItems));
//         drawFavoraitesProductsUI(filteredItems);
//     }
// }
