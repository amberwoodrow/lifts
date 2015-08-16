function Workout(date, $element) {
  this.exercises = [];
  this.date = dateToDisplay(date);
  this.$element = $element;
}

Workout.prototype.addExercise = function(name) {
  var newExercise = new Exercise(name);
  this.exercises.push(newExercise);
  this.render();
};

Workout.prototype.render = function() {
  var htmlOutput = "";
  for(var i=0; i<this.exercises.length; i++) {
    htmlOutput += this.exercises[i].render(i);
  }
  this.$element.html(htmlOutput);
};

Workout.prototype.removeExercise = function(id) {
  this.exercises.splice(id, 1);
  this.render();
};