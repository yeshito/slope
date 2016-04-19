var x1 = 10
var x2 = 12

var m = 1/2
var b = 0.3

var y1 = m * x1 + b
var y2 = m * x2 + b

var slope = (y2-y1)/(x2-x1);

if (slope > 0) {
  console.log("Things are trending up!");
} else if (slope < 0) {
  console.log("Things are trending down :(");
} else {
  console.log("Things are pretty flat___");
}
