let frameState = 0

const frames = [ 
  function () { drawEntry() },
  function () { 
    drawEntry()
    drawInstance(1) 
  },
  function () { 
    drawEntry()
    drawInstance(1) 
    drawInstance(2) 
  },
  function () { 
    drawEntry()
    drawInstance(1) 
    drawInstance(2)
    drawInstance(3) 
  },
  function () { 
    drawEntry()
    drawInstance(1) 
    drawInstance(2)
    drawInstance(3)
    drawInstance(4) 
  }
];

function IncreaseFrameState() {
  if (frameState < frames.length - 1) {
    frameState++;
  }
}

function DecreaseFrameState() {
  if (frameState > 0) {
    frameState--;
  }
}

function drawEntry() {
  rect(50, 20, 400, 50, 10);
  text('System.out.println(sum(3));', 70, 56)
}

function drawInstance(n) {
  rect((1 + n) * 80, (n - 1) * 200 + 90, 400, 180, 10);
}

function drawExplanation() {
  text('Lorem ipsum dolar sit amet', windowWidth/2, 50)
}

function setup() {
  createCanvas(windowWidth, windowHeight-50);
  // Matches the background color sat in index.html
  background(208);
  textSize(18);
  describe('A white circle with black outline in the middle of a gray canvas.');

  let rightButton = createButton('Next');
  rightButton.position(windowWidth/2 + 10, windowHeight-50);
  rightButton.style('width', '70px');
  rightButton.style('height', '40px');
  rightButton.style('color', 'white');
  rightButton.style('background-color', 'blue');
  rightButton.mousePressed(IncreaseFrameState);

  let leftButton = createButton('Previous');
  leftButton.position(windowWidth/2 - 70, windowHeight-50);
  leftButton.style('width', '70px');
  leftButton.style('height', '40px');
  leftButton.style('color', 'white');
  leftButton.style('background-color', 'blue');
  leftButton.mousePressed(DecreaseFrameState);

  drawEntry();
  drawExplanation();
}

function draw() {
  // put drawing code here
  resizeCanvas(windowWidth, windowHeight-40);
  // Matches the background color sat in index.html
  background(208);

  frames[frameState]();
}
