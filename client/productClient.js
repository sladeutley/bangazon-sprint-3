// listener for my products button in welcome.pug

document.getElementById('showUserProducts').addEventListener('click', () => {
  location.href = `${location.origin}/my-products`;
});
