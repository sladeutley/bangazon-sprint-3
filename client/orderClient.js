$('.pay').click(function (e) {
  let pType;
  pType = this.id;
  let url = window.location.pathname;
  let ordId = url.slice(-1);
  console.log(ordId, 'ordId')
  $.ajax({
    type: "PATCH",
    url: `/completeorder`,
    data: { paymentType: pType }
  })
    .done((what) => {
      console.log(what, 'what');
    })
})

