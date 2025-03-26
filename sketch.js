let frameState = 0;
let recursionStack = [];
let callValue = 3;

function IncreaseFrameState() {
  if (frameState < callValue+2) {
    frameState++;
  }
}

function DecreaseFrameState() {
  if (frameState > 0) {
    frameState--;
  }
}

function GenerateBoxes(callValue) {
  let stack = [];
  let initialBox = new SumCodeBox("n")
  stack[0] = initialBox

  for (let i = 1; i < callValue+2; i++) {
    let SumRecBox = new SumCodeBox(callValue-(i-1));
    stack[i] = SumRecBox;
  }
  return stack;
}

function generateButton(text, x, y){
  let button = createButton(text)
  button.position(x,y);
  button.style("width", "70px");
  button.style("height", "40px");
  button.style("color", "white");
  button.style("background-color", "blue");
  return button
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Courier New");
  recursionStack = GenerateBoxes(callValue);

  let rightButton = generateButton("Next", windowWidth / 2 + 10, windowHeight - 50)
  rightButton.mousePressed(IncreaseFrameState);

  let leftButton = generateButton("Previous", windowWidth / 2 - 70, windowHeight - 50)
  leftButton.mousePressed(DecreaseFrameState);
}

function draw() {
  background(200); 
  for (let i = 0; i < frameState; i++) {
    let offsetX = i * 70;
    let offsetY = i * 150;
    push();
    translate(offsetX, offsetY);
    recursionStack[i].draw();
    pop();
  }
}
