// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = Number(price) * +quantity;
  product.querySelector('.subtotal span').innerText = `${subtotal}`; // updating the subtotal cell of the product
  return subtotal; // returning the subtotal value
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

// Step 1 --> return the subtotal value from the function we created
// Step 2 --> add it to an array for collecting all the subtotals
// Step 3 --> make a sum from the array
// Step 4 -->  convert the sum into a string
// Step 5 --> add it to the element that has total
  const allProducts = document.querySelectorAll('.product'); //--> HTMLCollection
  const copyAllProducts = [...allProducts]; // HTMLCOllection ---> []
  console.log('allProducts', copyAllProducts)
  
  const subtotalsArray = copyAllProducts.map(product => {
    return updateSubtotal(product)
  })
  const total = subtotalsArray.reduce((accumulator, currentVal)=> accumulator + currentVal)
  // console.log('total', `${total}`)
  document.querySelector('#total-value span').innerText = `${total}`;


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
  const classAttr = calculatePricesBtn.getAttribute('class')
  console.log('classAttr', classAttr)
  //... your code goes here
});
