$(document).on('ready', function() {
  console.log('sanity check!');
  $('#date').html(dateToDisplay());

  $('#addExerciseBtn').click(function() {
    var exerciseSelectedVal = $('#exerciseName option:selected').val();
    var exerciseSelectedText = $('#exerciseName option:selected').text();
    var numSets = $('#sets').val();
    if (onlyOneExcersize(exerciseSelectedVal)) {
      for (i=0; i<numSets; i++) {
        count += 1;
      $('#tableMain').append(
        '<tr id="' + exerciseSelectedVal + '">' + 
          '<td class="exercise">' + 
            exerciseSelectedText + 
          '</td>' +
          '<td class="sets">' + 
            count +
          '</td>' +
          '<td class="reps">' + 
            'reps' +
          '</td>' +
          '<td class="weight">' + 
            'weight' +
          '</td>' +
          '<td class="delete">' + 
            '<button class="btn btn-danger btn-circle remove">' +
              '<span class="glyphicon glyphicon-remove">' +
              '</span>' +
            '</button>' +
          '</td>' +
        '</tr>');
      }
    }
    else {
      flashMessage("<span class='glyphicon glyphicon-remove'></span> Already added " + exerciseSelectedText.toLowerCase(), "error");
    }
  });


  $(document).on('click', '.remove', function() {
    exerciseNameArr.splice(exerciseNameArr.indexOf($(this).parents('tr').attr('id')), 1);
    $(this).parents('tr').remove();
    console.log(exerciseNameArr);
  });

    function flashMessage(message, idOfWhereToDisplay) {
      var id = '#' + idOfWhereToDisplay;
      $(id).html(message);
      // $(id).slideDown('slow');
      $(id).css('display','inline-block');
      $(id).click(function () { 
        $(id).hide();
      });
    }
});

