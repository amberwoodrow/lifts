  var workout = new Workout(new Date(), $('#tableMain'));
$(document).on('ready', function() {


  $('#addExerciseBtn').click(function() {
    workout.addExercise($('#exerciseName').val());
  });

  $(document).on('click', '.add-set',function() {
    var exerciseId = $(this).data("exercise-id");
    var weight = $('#'+exerciseId + '-new-weight').val();
    var reps = $('#'+exerciseId + '-new-reps').val();

    workout.exercises[exerciseId].addSet(weight, reps);
  });

  $(document).on('click', '.remove-set',function() {
    var exerciseId = $(this).data("exercise-id");
    var setId = $(this).data("set-id");
    workout.exercises[exerciseId].removeSet(setId);
  });

  $(document).on('click', '.remove-exercise',function() {
    var exerciseId = $(this).data("exercise-id");
    workout.removeExercise(exerciseId);
  });

});