// listener for new product button in welcome.pug

document.getElementById('showProductForm').addEventListener('click', () => {
  location.href = `${location.origin}/new-product`;
});

// listener for add payment button
document.getElementById('addPayment').addEventListener('click', () => {
  console.log('add a new payment type');
  location.href = `${location.origin}/addPayment`;
});

// listener for my products
document.getElementById('showUserProducts').addEventListener('click', () => {
  location.href = `${location.origin}/my-products`;
});
