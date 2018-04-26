// listener for add payment button
document.getElementById('addPayment').addEventListener('click', () => {
  console.log('add a new payment type');
  location.href = `${location.origin}/addPayment`;
});
