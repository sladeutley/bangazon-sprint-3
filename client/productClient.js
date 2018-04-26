// listener for new product button in welcome.pug

document.getElementById('showProductForm').addEventListener('click', () => {
  location.href = `${location.origin}/new-product`;
});

