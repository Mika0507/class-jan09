// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  //console.log(price);
  //console.log(quantity);

  const subtotalPrice = Number(price.innerText) * Number(quantity.value);

  const subtotalElement = product.querySelector(".subtotal span");

  subtotalElement.innerText = subtotalPrice;

  return subtotalPrice;
  
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  let sumTotal = 0;
  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName("product");
  for(let i = 0; i < products.length; i++){
    sumTotal += updateSubtotal(products[i]);
    
  }
  // console.log(sumTotal);
  const sumTotal1 = document.querySelector("#total-value span");
  sumTotal1.innerText = sumTotal;
  // ITERATION 3
  //... your code goes here
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
