var makeFadeDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer" src="taco.gif"></img>');
  this.oldStep = makeDancer.prototype.step;
  this.step();
  this.setPosition(top, left);
};

makeFadeDancer.prototype = Object.create(makeDancer.prototype);
makeFadeDancer.prototype.constructor = makeFadeDancer;
makeFadeDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep(this.timeBetweenSteps);
  //this.setPosition(Math.random() * 800, Math.random() * 800);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle('bounce', {times: 3}, 2000);
};