// let username = localStorage.getItem("username");


if (username) {
    logout.onclick = function () {
        localStorage.clear()
        setTimeout(() => {
            window.location = "register.html"
        }, 1500);
    }
} 
//start define elements 1
let productsDom_1 = document.getElementById("proudects_1");
let productsDom_2 = document.getElementById("proudects_2");
let productsDom_3 = document.getElementById("proudects_3");

let cartsToProductsDom = document.getElementById("div-items");
let show = document.getElementById("carts-products");
let badgeDom = document.getElementById("badge");
let badgeDom_2 = document.getElementById("badge-2");
let basketnumaDom = document.getElementById("basketnum");
let shoppingCartIcon = document.getElementById("shoppingCartIcon");


// show_1 data in UI
function show_1() {
    let data_1 = products_1.map((item)=>{
        return`
        
        <div class="d-flex mb-3" >
                <div>
                    <img src="${item.imageURL}" class="w-50" alt="photo">
                </div>
                <div>
                    <p>
                        <h5 onclick = "saveItemData(${item.id})" class = "cursor-pointer"><strong>${item.name}</strong> </h5> <br>
                        ${item.title}<br>
                        ${item.price} <br>
                        <del>${item.discount}</del> <br>
                        <button type="button" class="btn btn-success" id = "addCart" onclick ="addToCard(${item.id})">Add to Cart</button>
                    </p>
                </div>
            </div>
        `
    })
    productsDom_1.innerHTML = data_1
}
show_1()
//end define elements 1
// owl Carousel function 
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 3, // The number of items shown in the carousel
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});
//start define elements 2 owl carousel

// Display data in the UI 
function show_2() {
    let data_2 = products_2.map((item) => {
        return `
            <div class="item">
                <div class="w-100">
                    <div class="w-100">
                        <img src="${item.imageURL}" class="w-100 img-fluid" alt="photo">
                    </div>
                    <div class="w-100 text-center bg-light p-2">
                        <p class="w-100 text-start fs-6 ps-2 pt-2">
                            <span class="bg-danger p-1 text-white">${item.discount}</span> <br>
                            <span class="text-danger fw-bold">${item.offer}</span><br>
                            ${item.title} <br>
                            ${item.price} <br>
                            <del>${item.Sale}</del> <br>
                            <i class="fa-regular fa-heart"></i>
                        </p>
                        <button type="button" class="btn btn-success" onclick ="addToCard_2(${item.id})" >Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
    }).join(""); // To join elements into a single string

    productsDom_2.innerHTML = data_2;
}

// Call the function to display the data
show_2();

//end define elements 2 owl carousel

//start define elements 3

// show_3 data in UI
function show_3() {
    let data_3 = products_3.map((item) => {
        return `
            <div class="col-lg-6 col-6 mb-3">
                <div class="img text-center">
                    <img src="${item.imageURL}" class="img-fluid" alt="photo">
                </div>
                <div class="price text-center mt-3">
                    <p>${item.price}</p>
                    <p><span><del>${item.Sale}</del></span></p>
                    <button type="button" class="btn btn-success mb-3" onclick ="addToCard_3(${item.id})">Add to Cart</button>
                </div>
            </div>
        `;
    }).join(""); // Ensure the array is joined into a single string
    productsDom_3.innerHTML = data_3;
}
show_3();
//end define elements 3

let addCart = document.getElementById("addCart");
let addedToLocal =localStorage.getItem("productsInItem") ? 
    JSON.parse(localStorage.getItem("productsInItem")) :
    [];
if (addedToLocal) {
    addedToLocal.map((item) => {
        cartsToProductsDom.innerHTML += `<P class="mb-1"> ${item.name}</P>`
    });
    badgeDom.innerHTML = addedToLocal.length
    badgeDom_2.innerHTML = addedToLocal.length

};
// add To Card from products_1
function addToCard(id) {
    if (localStorage.getItem("username")) {
        let chosenItem = products_1.find((item)=> item.id === id);
        cartsToProductsDom.innerHTML += `<P class="mb-1"> ${chosenItem.name}</P>`

        addedToLocal = [...addedToLocal, chosenItem]
        localStorage.setItem("productsInItem", JSON.stringify(addedToLocal))

        let cartsItemLength = document.querySelectorAll('.carts-products div p');
        // show.style.display = "block"
        badgeDom.innerHTML = cartsItemLength.length
        
    // console.log(chosenItem.id);
        basketnumaDom.innerHTML = cartsItemLength.length
    }else{
        alert("you must create an account.")
        window.location = "login.html"
    }
}
// add To Card from products_2
function addToCard_2(id) {
    if (localStorage.getItem("username")) {
        let chosenItem = products_2.find((item)=> item.id === id);
        cartsToProductsDom.innerHTML += `<P class="mb-1"> ${chosenItem.name}</P>`

        addedToLocal = [...addedToLocal, chosenItem]
        localStorage.setItem("productsInItem", JSON.stringify(addedToLocal))

        let cartsItemLength = document.querySelectorAll('.carts-products div p');
        badgeDom.innerHTML = cartsItemLength.length
        
        basketnumaDom.innerHTML = cartsItemLength.length
    }else{
        alert("you must create an account.")
        window.location = "login.html"
    }
}
// add To Card from products_3
function addToCard_3(id) {
    if (localStorage.getItem("username")) {
        let chosenItem = products_3.find((item)=> item.id === id);
        cartsToProductsDom.innerHTML += `<P class="mb-1"> ${chosenItem.name}</P>`

        addedToLocal = [...addedToLocal, chosenItem]
        localStorage.setItem("productsInItem", JSON.stringify(addedToLocal))

        let cartsItemLength = document.querySelectorAll('.carts-products div p');
        badgeDom.innerHTML = cartsItemLength.length
        
        basketnumaDom.innerHTML = cartsItemLength.length
    }else{
        alert("you must create an account.")
        window.location = "login.html"
    }
}

shoppingCartIcon.addEventListener('click', opencartmenu)
function opencartmenu() {
    if (cartsToProductsDom.innerHTML != "") {
        if ( show.style.display == "block") {
            show.style.display = "none";
        }else{
            show.style.display = "block";
        }
    }
}

function saveItemData(id) {
    localStorage.setItem("productId" , id);
    window.location = "cartDetails.html";
    
}