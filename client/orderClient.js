
$('#pay').change(function (e) {
  var value = $(this).val();
  $(this).blur()
  var success = confirm('Are you sure you want to change your payment type?');
  if (success) {
    alert('changed');
    //calls complete order function in orderCtrl
    $.ajax({
      type: "PATCH",
      url: `/completeorder`,
      data: { paymentType: value }
    })
      .done((order) => {
      })
  }
  else {
    return false;
  }
});



