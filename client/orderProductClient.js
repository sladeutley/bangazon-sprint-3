
$('#addToOrder').click((e) => {

  let url = window.location.pathname;
  let ordProdId = url.slice(-1);
  $.ajax({
    type: "POST",
    url: `/orderProduct/${ordProdId}`,
  })
    .done((what) => {
      console.log(what, 'what');
    })
});
