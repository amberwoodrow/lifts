// this.workouts is object to be referenced by date.
// User holds exercises for the person of making charts of their exercise data.
function User() {
  this.workouts = {};
}

User.prototype.addWorkout = function(date) {
  this.workouts[date.toDateString()] = new Workout($('#tableMain'));
};

User.prototype.getWorkout = function(date) {
  if (this.workouts[date.toDateString()] != null) {
    return this.workouts[date.toDateString()];
  }
  else {
    this.addWorkout(date);
    return this.workouts[date.toDateString()];
  }
};

// store user to save its key and values for chart testing.
// 

if (localStorage.getItem("user") !== null) {
  var user = localStorageuser;
}

// Put the object into storage
localStorage.setItem('user', JSON.stringify(user));

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('user');

console.log(retrievedObject);