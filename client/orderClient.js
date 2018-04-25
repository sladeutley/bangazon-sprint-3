//event listener on payment types in order page

$('#pay').change(function (e) {
  var value = $(this).val();
  $(this).blur() // Firefox fix as suggested by AgDude
  var success = confirm('Are you sure you want to change the Dropdown?');
  if (success) {
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


