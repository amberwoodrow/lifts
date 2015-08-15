// returns a date with full month name
function dateToDisplay(d) {
  var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  var date = monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
  return date;
}

// for num each exercise in arr is num sets