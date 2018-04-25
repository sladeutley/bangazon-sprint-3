document.getElementById('addPayment').addEventListener('click', () => {
  console.log('add a new payment type');
  location.href = `${location.origin}/addPayment`;
});


document.getElementById('addCard').addEventListener('click', () => {
  location.href = `${location.origin}/welcome`;
});




