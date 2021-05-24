let favs = Array.from(document.querySelectorAll(".fa-heart"))
let deleteBtns = Array.from(document.getElementsByClassName("fa-trash-alt"))
let plusBtns = Array.from(document.querySelectorAll(".fa-plus-circle"))
let minusBtns = Array.from(document.querySelectorAll(".fa-minus-circle"))

// Favourites part
for (let fav of favs) {
    fav.addEventListener("click", function () {
        fav.style.color === "red" ? fav.style.color = "rgb(33, 37, 41)"
            : fav.style.color = "red"
    })
}

// delete part
for (let i in deleteBtns) {
    deleteBtns[i].addEventListener("click", function () {
        deleteBtns[i].parentElement.parentElement.remove()
        total()
    })

}

// plus btns part
for (let i in plusBtns) {
    plusBtns[i].addEventListener("click", function () {
        plusBtns[i].nextElementSibling.innerHTML = +(plusBtns[i].nextElementSibling.innerHTML) + 1;
        total()
    })
}

// minus btns part
for (let i in minusBtns) {
    minusBtns[i].addEventListener("click", function () {
        if (minusBtns[i].previousElementSibling.innerHTML > 0)
            minusBtns[i].previousElementSibling.innerHTML--;
        total()
    })
}

// total fct
function total() {
    let totalPrice = document.querySelector(".total-price")
    console.log(totalPrice)
    let qutes = Array.from(document.querySelectorAll(".qute"))
    let unitPrices = Array.from(document.querySelectorAll(".unit-price"))
    let s = 0
    for (let i = 0; i < unitPrices.length; i++) {
        s = s + (unitPrices[i].innerText.replace("$", "") * qutes[i].innerText)
    }
    console.log(s)
    totalPrice.innerText = s
}
