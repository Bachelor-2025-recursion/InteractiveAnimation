class Entity {
  constructor(startX, startY, parent = null, animation = null) {
    this.x = parent != null ? parent.x + startX : startX;
    this.y = parent != null ? parent.y + startY : startY;
    this.parent = parent != null ? parent : null;
    this.animation = animation;
  }

  render() {
    fill(255, 0, 0);
    circle(this.x, this.y, 20);
  }

  animate() {
    if (this.animation != null) {
      this.animation();
    } else {
      console.log("No animation");
    }
  }
}

class CodeBlock extends Entity {
  constructor(startX, startY, parent = null, animation = null, code) {
    super(startX, startY, parent, animation);
    this.code = code;
  }

  render() {
    let lines = this.code.trim().split("\n");
    let lineHeight = textAscent() + textDescent() + 5;

    let codeWidth = textWidth(this.code) + 20;
    let codeHeight = lines.length * lineHeight;
    fill(150, 200, 250);
    rect(this.x, this.y, codeWidth, codeHeight, 10);
    fill(0);
    text(this.code, this.x + 10, this.y + 10);
  }
}

let testEntity, testEntity2, codeBlockTest;

function setup() {
  createCanvas(windowWidth, windowHeight - 50);
  // Matches the background color sat in index.html
  background(208);
  testEntity = new Entity(100, 150);
  testEntity2 = new Entity(20, 0, testEntity, function () {
    this.x++;
  });
  codeBlockTest = new CodeBlock(
    100,
    100,
    testEntity,
    function(){
      if (this.x < 500){this.x++}
    },
    `
public static int sum(int n) {
    if (n <= 0) {
        return 0; // Base case
    }
    return n + sum(n - 1); // Recursive case
}
`
  );
}

function draw() {
  background(208);
  // put drawing code here
  // Matches the background color sat in index.html
  // testEntity.render();
  // testEntity2.render();
  // testEntity2.animate();
  codeBlockTest.render();
  // codeBlockTest.animate();
  
}
