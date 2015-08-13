$(document).on('ready', function() {
  console.log('sanity check!');
  $('#date').html(dateToDisplay());

  $("input[type=button]").click(function(){
    $(this).toggleClass("pressed");
  });
});

