class SumCodeBox {
    constructor(callValue) {
      this.callValue = callValue;
      this.codeText = [
        `static int sum(int ${callValue}) {`,
        `  if (${callValue} == 0) {`,
        "    return 0;",
        "  } else {",
        `    return ${callValue} + sum(${callValue} - 1);`,
        "  }",
        "}",
        "",
        `System.out.println(\"Return is:\" + sum(${callValue}));`
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
      
        let lineHeight = 22;
        let boxPadding = 20;
        let boxWidth = maxWidth + boxPadding * 2;
        let boxHeight = this.codeText.length * lineHeight + boxPadding;
      
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