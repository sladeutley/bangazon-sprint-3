console.log('TESTSTSTTS for client thing');

//click event for adding product to current order

$('.delete').click(function(e) {
  //id  of the payment type in db
  //get order id from url
  //calls complete order function in orderCtrl
  $.ajax({
    type: 'GET',
    url: `/my-products`
  });
});
