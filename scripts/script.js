document.getElementById("main-action-button").onclick = function() {
    document.getElementById('products').scrollIntoView({behavior:"smooth"});
}

let links = document.querySelectorAll(".menu-item > a");
links.forEach(($link)=>{
    $link.onclick = function () {
        document.getElementById($link.getAttribute("data-link")).scrollIntoView({behavior:"smooth"});
    }
});

let productButtons = document.querySelectorAll(".product-button");
productButtons.forEach(($productButton)=>{
    $productButton.onclick = function () {
        document.getElementById('order').scrollIntoView({behavior:"smooth"});
    }
});

let burger = document.getElementById("burger");
let customerName = document.getElementById("customerName");
let phone = document.getElementById("phone");
document.getElementById("order-action").onclick = function () {
    let hasError = false;

    [burger, customerName, phone].forEach(($item)=>{
        if (!$item.value) {
            $item.parentElement.style.background = "red";
            hasError = true;
        } else $item.parentElement.style.background = "";
    });

    if (!hasError) {
        [burger, customerName, phone].forEach(($item)=>{
            $item.value = "";
        });
        alert("Спасибо за заказ! Мы скоро свяжемся с вами!");
    }
}

let prices = document.querySelectorAll(".products-item-price");
document.getElementById("change-currency").onclick = function(e) {
    let currentCurreny = e.target.innerText;

    let newCurrency = "$";
    let coefficient = 1;

    if (currentCurreny === "$") {
        newCurrency = "₽";
        coefficient = 88.59;
    } else if (currentCurreny === "₽") {
        newCurrency = "BYN";
        coefficient = 3.16;
    } else if (currentCurreny === "BYN") {
        newCurrency = "€";
        coefficient = 0.9;
    } else if (currentCurreny === "€") {
        newCurrency = "¥";
        coefficient = 6.9;
    }

    e.target.innerText = newCurrency;
    prices.forEach(($price)=>{
        $price.innerText = (coefficient*$price.getAttribute("data-base-price")).toFixed(2) + " " + newCurrency;
    });
}

