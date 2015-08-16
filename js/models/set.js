function Set(weight, reps) {
  this.weight = weight;
  this.reps = reps;
}

Set.prototype.render = function(id,exid) {
  var htmlOutput = "<tr>" +
    "<td></td>" +
    "<td>" + (id + 1) + "</td>" +
    "<td>" + this.reps + "</td>" +
    "<td>" + this.weight + "</td>" +
    "<td><button class='remove-set' data-exercise-id='" + exid + "' data-set-id='" + id + "'>Remove</button></td>" +
    "</tr>";
  return htmlOutput;
};