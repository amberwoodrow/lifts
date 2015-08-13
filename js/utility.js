function dateToDisplay () {
  var d = new Date();
  var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  var date = monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
  return date;
}