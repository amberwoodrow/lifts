var exerciseNameArr = [];

// Make sure exercise is in array only once before adding to exerciseNameArr.
function onlyOneExcersize(selected) {
  if(exerciseNameArr.indexOf(selected) != -1) {
    return false;
  }
  else {
    exerciseNameArr.push(selected);
    return true;
  }
}

// returns a date with full month name
function dateToDisplay() {
  var d = new Date();
  var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  var date = monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
  return date;
}