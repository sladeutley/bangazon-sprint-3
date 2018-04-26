//click event for adding product to current order 
$('#addToOrder').click((e) => {
  //get orderProductId from url
  let url = window.location.pathname.split('/');
  let ordProdId = url[url.length - 1];
  //calls addProductToOrder function in orderCTRL
  $.ajax({
    type: "POST",
    url: `/orderProduct/${ordProdId}`,
  })
    .done(() => {
    })
  alert('You have successfully added this product to your shopping cart!');
  location.href = `${location.origin}/orderdetail`;
});


