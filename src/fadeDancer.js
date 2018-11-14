var makeFadeDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer taco" src="taco.gif"></img>');
  this.oldStep = makeDancer.prototype.step;
  this.step();
  this.setPosition(top, left);
};

makeFadeDancer.prototype = Object.create(makeDancer.prototype);
makeFadeDancer.prototype.constructor = makeFadeDancer;
makeFadeDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep(this.timeBetweenSteps);
  this.setPosition(Math.random() * 800, Math.random() * 800);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var node = this.$node;
  this.$node.mouseover(function() {
    node.animate({width: '50%'});
  });
  this.$node.toggle('bounce', {times: 3}, 2000);

  // var allDancers = window.dancers;
  // //console.log(this.$node);
  // var currentDancer = this.$node;
  // var arr = [];
  // var distances = [];
  
  
  // for (var i = 0; i < allDancers.length; i ++) {
  //   var position = allDancers[i].$node.position();
  //   arr.push(position);
  // }
  // //console.log(arr, 'arr');
  // var taco = $('.taco').offset();
  // console.log(taco, 'taco'); //jquery object

  
  // for (var i = 0; i < arr.length; i ++) {
  //   console.log(arr, 'arr i');
  //   var top = arr[i].top - taco.top;
  //   var left = arr[i].left - taco.left;
  //   var distanceFromTaco = Math.sqrt(top * top + left * left);
  //   distances.push(distanceFromTaco);
  // }

  // for (var i = 0; i < distances.length; i ++) {
  //   if (distances[i] <= 20) {  
  //     var styleSettings = {
  //       top: 100,
  //       left: 100
  //     };
  //     allDancers[i].$node.css(styleSettings);
  //   }
  // }
};



