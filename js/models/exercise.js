function Exercise(name) {
  this.name = name;
  this.sets = [];
}

Exercise.prototype.render = function(id) {
  var htmlOutput = "";
  htmlOutput += "<tr><td>" + this.name + "</td><td></td><td></td><td></td><td></td></tr>";
  for (var i=0; i< this.sets.length; i++) {
    htmlOutput += "<tr>" +
    "<td></td>" +
    "<td>" + (i + 1) + "</td>" +
    "<td>" + this.sets[i].weight + "</td>" +
    "<td>" + this.sets[i].reps + "</td>" +
    "<td></td>" +
    "</tr>";
  }

  htmlOutput += "<tr>" +
  "<td></td>" +
  "<td></td>" +
  "<td><input type='text' id='" + id + "-new-reps' placeholder='reps'></input></td>" +
  "<td><input type='text' id='" + id + "-new-weight' placeholder='weight'></input></td>" +
  "<td><button class='new-set' data-exercise-id='" + id + "'>New Set</button></td></tr>";
  return htmlOutput;
};

Exercise.prototype.addSet = function(weight, set) {
  this.sets.push(new Set(weight, set));
  this.render();
};