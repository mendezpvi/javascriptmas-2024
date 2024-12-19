import shoppingList from "./shoppingList.js"

const productList = document.getElementById('product-list')
const sortBtn = document.getElementById('sort-btn')

function getListByCheapest(list) {
  return list.toSorted((a, b) => a.price - b.price)
}

function renderProductList(list) {
  let itemHTML = ''
  list.forEach(({ product, price }) => {
    itemHTML += `<li>${product}: <span>$${price}</span></li>`
  })
  productList.innerHTML = itemHTML
}

document.addEventListener('DOMContentLoaded', () => {
  const sortedList = getListByCheapest(shoppingList)

  let isSorted = false

  renderProductList(shoppingList)

  sortBtn.addEventListener('click', () => {
    if (isSorted) {
      renderProductList(shoppingList)
      sortBtn.textContent = `Sort by Price`
    } else {
      renderProductList(sortedList)
      sortBtn.textContent = `Reset Order`
    }
    isSorted = !isSorted
  })
})
