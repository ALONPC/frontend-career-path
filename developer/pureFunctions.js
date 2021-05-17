// function priceAfterTax(productPrice) {
//   return productPrice * 0.2 + productPrice;
// }

// const result = priceAfterTax(100); // if i run this 1.000.000 times it should output 120
// result;

var tax = 20;
function calculateTax(productPrice) {
  return productPrice * (tax / 100) + productPrice;
}

const result = calculateTax(100);
result;
