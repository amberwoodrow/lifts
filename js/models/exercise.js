function Exercise(name) {
  this.name = name;
  this.sets = [];
}

Exercise.prototype.render = function(id) {
  var htmlOutput = "";
  htmlOutput += "<tr><td>" + this.name + "</td><td></td><td></td><td></td><td><button class='remove-exercise' data-exercise-id='" + id + "'>Remove</button></td></tr>";
  for (var i=0; i< this.sets.length; i++) {
    htmlOutput += this.sets[i].render(i, id);
  }

  htmlOutput += "<tr>" +
  "<td></td>" +
  "<td></td>" +
  "<td><input type='text' id='" + id + "-new-reps' placeholder='reps'></input></td>" +
  "<td><input type='text' id='" + id + "-new-weight' placeholder='weight'></input></td>" +
  "<td><button class='add-set' data-exercise-id='" + id + "'>Add Set</button></td></tr>";
  return htmlOutput;
};

Exercise.prototype.addSet = function(weight, reps) {
  this.sets.push(new Set(weight, reps));
  workout.render();
};

Exercise.prototype.removeSet = function(id) {
  this.sets.splice(id, 1);
  workout.render();
};