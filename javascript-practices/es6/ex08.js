/**
 *
 * class Rect
 *
 */
const name = "kickscar";
o = {
  draw() {},
  name,
};

class Rect {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
  draw() {
    console.log(`React(w=${this.w},h=${this.w})을 그렸습니다`);
  }
}

//test
const rect1 = new Rect(10, 20);
const rect2 = new Rect(100, 200);
rect1.draw();
rect2.draw();

/**
 * cf: 생성자 함수(prototype 기반)
 *
 */
const Circle = function (x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
};
Circle.prototype.draw = function () {
  console.log(`Circle(x=${this.x},y=${this.y},r=${this.r})을 그렸습니다.`);
};
const circle1 = new Circle(10, 20, 30).draw();

/**
 * extends
 *
 */
class Shape {
  constructor(fillColor, lineColor) {
    this.fillColor = fillColor;
    this.lineColor = lineColor;
  }

  draw() {
    console.log("구현할 수 없습니다..");
  }
}

class RectTriangle extends Shape {
  constructor(w, h, fillColor, lineColor) {
    super(fillColor, lineColor);
    this.w = w;
    this.h = h;
  }

  // @override
  draw() {
    console.log(
      `RectTriangle(w=${this.w},h=${this.h},fillColor=${this.fillColor},lineColor=${this.lineColor})을 그렸습니다`
    );
  }
}

const shape1 = new RectTriangle(10, 10, "blue", "yellow");
shape1.draw();
