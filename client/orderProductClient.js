//click event for adding product to current order 
$('#addToOrder').click((e) => {
  //get orderProductId from url
  let url = window.location.pathname;
  let ordProdId = url.slice(-1);
  //calls addProductToOrder function in orderCTRL
  $.ajax({
    type: "POST",
    url: `/orderProduct/${ordProdId}`,
  })
    .done(() => {
    })
});
