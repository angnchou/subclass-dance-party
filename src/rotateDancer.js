var makeRotateDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer" src="reindeer.gif"></img>');
  this.oldStep = makeDancer.prototype.step;
  this.step();  
  this.setPosition(top, left);
};

makeRotateDancer.prototype = Object.create(makeDancer.prototype);
makeRotateDancer.prototype.constructor = makeRotateDancer;
makeRotateDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep(this.timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggleClass('flip');
  var node = this.$node;
  this.$node.mouseover(function() {
    node.toggle('scale');
  });
};
