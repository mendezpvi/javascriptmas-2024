import shoppingCartData from "./data.js"

function calculateCostUsingForEach(arr) {
    let totalGiftCost = 0
    arr.forEach(el => {
        if (el.isGift) {
            totalGiftCost += el.price
        }
    })
    // totalGiftCost.toFixed(2)
    return Math.round(totalGiftCost * 100) / 100
}

function calculateCostUsingReduce(arr) {
    let totalGiftCost = arr.reduce((acc, curr) => {
        if (curr.isGift) {
            return acc + curr.price
        }
        return acc
    }, 0)
    return Math.round(totalGiftCost * 100) / 100
}


console.log(calculateCostUsingForEach(shoppingCartData)) //559.93 
console.log(calculateCostUsingReduce(shoppingCartData)) //559.93 

