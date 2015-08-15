$(document).on('ready', function() {

  var workout = new Workout(new Date(), $('#tableMain'));

  $('#addExerciseBtn').click(function() {
    workout.addExercise($('#exerciseName').val());
  });

  $(document).on('click', '.new-set',function() {
    var exerciseId = $(this).data("exercise-id");
    var weight = $('#'+exerciseId + '-new-weight').val();
    var reps = $('#'+exerciseId + '-new-reps').val();

    workout.exercises[exerciseId].addSet(weight, reps);
  });

});