var exerciseNameAndCount = {};
var count = 1;

// keeps count of sets by seeing if the exercise has been entered before
function ifExistsAddToCount(selected) {
  if(selected in exerciseNameAndCount) {
    exerciseNameAndCount[selected] += 1;
    console.log(exerciseNameAndCount[selected]);
    return false;
  }
  else {
    exerciseNameAndCount[selected] = 1;
    console.log(exerciseNameAndCount[selected]);
    return true;
  }
}

// function 


console.log(exerciseNameAndCount);

// returns a date with full month name
function dateToDisplay() {
  var d = new Date();
  var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  var date = monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
  return date;
}

// for num each exercise in arr is num sets