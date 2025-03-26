function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  textFont('Courier New')

  let callValue = 3
  let recursionStack = []

  for (let i = 0; i < callValue; i++) {
    let offsetX = i * 20
    let offsetY = i * 20

    push(); 
    translate(offsetX, offsetY) // Move to the new position
    let SumRecBox = new SumCodeBox(callValue - i)
    recursionStack[i] = SumRecBox
    //SumRecBox.draw()
    recursionStack[i].draw()
    pop(); // Restore the original drawing state
  }
}