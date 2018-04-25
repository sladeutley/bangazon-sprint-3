//event listener on payment types in order page

$('.pay').click(function (e) {
  let pType;
  //id  of the payment type in db
  pType = this.id;
  //get order id from url
  let url = window.location.pathname;
  let ordId = url.slice(-1);
  //calls complete order function in orderCtrl
  $.ajax({
    type: "PATCH",
    url: `/completeorder`,
    data: { paymentType: pType }
  })
    .done((order) => {
    })
})

