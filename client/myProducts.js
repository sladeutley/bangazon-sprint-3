// listener for new product button on my-products.pug

document.getElementById('showProductForm').addEventListener('click', () => {
  location.href = `${location.origin}/new-product`;
});
