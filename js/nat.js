/*Raphael.el.is = function (type) { return this.type == (''+type).toLowerCase(); };
Raphael.el.x = function (val) { return this.is('circle') ? this.attr('cx', val) : this.attr('x', val); };
Raphael.el.y = function (val) { return this.is('circle') ? this.attr('cy', val) : this.attr('y', val); };
Raphael.el.pin = function() {
  this.data('ox', this.is('circle')? this.attr('cx') : this.attr('x'));
  this.data('oy', this.is('circle')? this.attr('cy') : this.attr('y'));
  return this;
};


// Make Raphael element draggable
Raphael.el.draggable = function(options) {
  var start = function() {
    this.pin();
    this.toFront();
  };
  var move = function(dx, dy, mx, my, ev) {
    //output.innerHTML = 'Moving: '+dx+', '+dy;
    this.x(this.data('ox')+dx);
    this.y(this.data('oy')+dy);
  };
  var end = function() {
    
  };
  this.drag(move, start, end);
  this.onDragOver(function(el) {
    output.innerHTML = 'Moving shape is over element ID '+el.id;
  });
};

// Iterate through a Raphael set
Raphael.st.draggable = function(options) {
  for (var i in this.items) {
    this.items[i].draggable(options);
  }
  return this;
};

var paper = Raphael('canvas', 500, 200);
var set = paper.set(),
    rect = paper.rect(10, 15, 64, 64, 15). attr({fill: 'pink', opacity:0.4}),
    circle = paper.circle(150, 48, 32).attr({fill: 'lightblue', opacity:0.4}),
    circle2 = paper.circle(100, 100, 20).attr({fill: 'lightgreen', opacity:0.4});
var output = document.getElementById('console');

set.push(rect, circle); // Add to set
set.draggable({ margin:10 });*/





