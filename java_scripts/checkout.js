/*kai start*/
function buy() {
    let name = document.getElementById("name").value
    let addr = document.getElementById("addr")
    let card = document.getElementById("card")
    let carChoice = document.getElementById("car-order").value
    let total = document.getElementById("totalPrice")

    if (carChoice == "mazda") {
        total.textContent = "Total is $11,998"
    }
    else if (carChoice == "porsche") {
        total.textContent = "Total is $168,998"
    }
    else if (carChoice == "benz") {
        total.textContent = "Total is $45,998"
    }
    else if (carChoice == "bmw") {
        total.textContent = "Total is $42,998"
    }

    
    let details = [name, addr, card, carChoice, total]

    let confirm = document.getElementById("confirmation")
    confirm.textContent = "Thank you, " + String(name) + ", for buying our " + String(carChoice) + "!"

}

/*kai end */
