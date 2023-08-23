const CHARACTERS = "アァ1カサ7タナ3ハマ8ヤャラ5ワガ8ザダ0バパ2イィキ4シチ6ニヒミ1リヰギ3ジヂ5ビピウ7ゥクス7ツヌフムユ9ュルグ0ズブヅ7プエェケセ3テネヘ1メレ2ヱゲゼ4デベペ6オォコ0ソトホ8モヨョ7ロヲゴ5ゾドボ2ポヴッ1ン";

export class Column {
  constructor(x, fontSize, canvasHeight, context) {
    this.x = x;
    this.y = 0;
    this.fontSize = fontSize;
    this.canvasHeight = canvasHeight;
    this.context = context;
  }

  drawSymbol() {
    if (this.y === 0 && Math.random() < 0.98) {
      return;
    }

    const characterIndex = Math.floor(Math.random() * CHARACTERS.length);
    const symbol = CHARACTERS[characterIndex];

    this.context.fillText(symbol, this.x, this.y);

    if (this.y > this.canvasHeight) {
      this.y = 0;
    } else {
      this.y += this.fontSize;
    }
  }
}