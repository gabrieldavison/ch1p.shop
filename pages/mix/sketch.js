let canvas;

console.log("p5");
// function setup() {
//   let cnv = createCanvas(windowWidth, windowHeight);
//   cnv.id("p5Canvas");
// }

// function draw() {
//   background(100);
//   square(100, 100, 200);
// }

const s = (sketch) => {
  let x = 100;
  let y = 100;

  sketch.setup = () => {
    sketch.createCanvas(200, 200);
  };

  sketch.draw = () => {
    sketch.background(0);
    sketch.fill(255);
    sketch.rect(x, y, 50, 50);
  };
};

let myp5 = new p5(s);
