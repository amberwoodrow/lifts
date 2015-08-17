// reference by date like a db timestamp
// local storage to make testing easier

var user = new User(); // to use user's workout I make a user
var currentDate = new Date();
var workout = user.getWorkout(currentDate);

// var workout = new Workout(new Date(), $('#tableMain'));
$(document).on('ready', function() {
  
  // Appends date now to h1
  function updateDate() {
    $('#date').html(currentDate.toDateString());
  }

  updateDate();

  $('#leftArrow').click(function() {
    subtractDate(currentDate);
    updateDate();
    workout = user.getWorkout(currentDate);
    workout.render();
  });

  $('#rightArrow').click(function() {
    addDate(currentDate);
    updateDate();
    workout = user.getWorkout(currentDate);
    workout = user.getWorkout(currentDate);
    workout.render();
  });

  // adds exercise on click it's value name
  $('#addExerciseBtn').click(function() {
    console.log(workout);
    workout.addExercise($('#exerciseName').val());
  });

  // document checks for clicks on elements that were added later, this type of click handler is more
  // 'expensive' and can be added to an element closer rather then document.
  $(document).on('click', '.add-set',function() {
    // stores the button clicked's data-exercise-id
    var exerciseId = $(this).data("exercise-id");
    // gets val from #exerciseId-new-weight
    var weight = $('#'+ exerciseId + '-new-weight').val();
    // gets val from #exerciseId-new-reps
    var reps = $('#'+ exerciseId + '-new-reps').val();

    // creates new set and adds it to the exercises set
    workout.exercises[exerciseId].addSet(weight, reps);
  });

  // Removes set by using the button clicked's data-exercise and -set -id
  $(document).on('click', '.remove-set',function() {
    var exerciseId = $(this).data("exercise-id");
    var setId = $(this).data("set-id");
    // removes set by targeting the id's place in exercises arr and removing it by id and rendering the
    // exercises again in remove set method
    workout.exercises[exerciseId].removeSet(setId);
  });

  // removes exercise by data-exercise-id
  $(document).on('click', '.remove-exercise',function() {
    var exerciseId = $(this).data("exercise-id");
    workout.removeExercise(exerciseId);
  });


  // chart example
  // $(function () {
  //   $('#chart-container').highcharts({
  //       chart: {
  //           zoomType: 'x'
  //       },
  //       title: {
  //           text: 'Weight Per Workout Comparison'
  //       },
  //       subtitle: {
  //           text: document.ontouchstart === undefined ?
  //                   'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
  //       },
  //       xAxis: {
  //           type: 'datetime'
  //       },
  //       yAxis: {
  //           title: {
  //               text: 'weight'
  //           }
  //       },
  //       legend: {
  //           enabled: false
  //       },
  //       plotOptions: {
  //           area: {
  //               fillColor: {
  //                   linearGradient: {
  //                       x1: 0,
  //                       y1: 0,
  //                       x2: 0,
  //                       y2: 1
  //                   },
  //                   stops: [
  //                       [0, Highcharts.getOptions().colors[0]],
  //                       [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
  //                   ]
  //               },
  //               marker: {
  //                   radius: 2
  //               },
  //               lineWidth: 1,
  //               states: {
  //                   hover: {
  //                       lineWidth: 1
  //                   }
  //               },
  //               threshold: null
  //           }
  //       },

  //       series: [{
  //           type: 'area',
  //           name: 'USD to EUR',
  //           data: data
  //       }]
  //   });
  // });

});

