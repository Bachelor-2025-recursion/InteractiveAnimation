//potentially give cordinate and figure out placement here instead of in sketch.js
//created a paramater for each value in the code that we might need to draw a line to an d such that we can reference it
//more easily in the future, dunno if needed tho.
class SumCodeBox {
    constructor(callValue) {
      this.callValue = callValue;
      this.ifVal = callValue;
      this.returnVal = callValue;
      this.recCallVal = callValue;

      this.codeText = [
        `static int sum(int ${this.callValue}) {`,
        `  if (${this.ifVal} == 0) {`,
        "    return 0;",
        "  } else {",
        `    return ${this.returnVal} + sum(${this.recCallVal} - 1);`,
        "  }",
        "}",
        "",
      ];
    }

    draw() {
        textSize(16);
        textFont('Courier New');

        let maxWidth = 0
        for (let line of this.codeText) {
          const lineWidth = textWidth(line)
          if (lineWidth > maxWidth) maxWidth = lineWidth
        }
      
        let lineHeight = 20;
        let boxPadding = 20;
        let boxWidth = maxWidth + boxPadding+2;
        let boxHeight = this.codeText.length * lineHeight;
      
        //draw box
        stroke(0);
        fill(250);
        rect(50, 50, boxWidth, boxHeight, 20);
      
        //draw text
        fill(0);
        noStroke();
        for (let i = 0; i < this.codeText.length; i++) {
          text(this.codeText[i], 50 + boxPadding, 50 + boxPadding + i * lineHeight);
        }
      }
      
  }