function preload() {

}

var colorList = ['#CE93D8',
  '#F48FB1',
  '#F06292',

];



function setup() {
  createCanvas(600, 600);
  background('#B3E5FC');
  frameRate(5);
}

function draw() {
  for (var x = 40; x < width + 40; x += 80) {
    for (var y = 40; y < height + 40; y += 40) {
      noStroke();

      var index = floor(random() * colorList.length);
      var colorHex = colorList[index];
      fill(color(colorHex));
      quad(x, y, x + 40, y - 20, x, y - 40, x - 40, y - 20);
    }
  }


  for (var x = 40; x < width + 80; x += 80) {
    for (var y = 40; y < height + 80; y += 80) {
      if (random() < 0.6) {
        fill('#3949AB');
      } else {
        fill('#0097A7');
      }
      ellipse(x - 40, y - 40, 22,25);
      noStroke();



    }
  }

  for (var x = 40; x < width + 80; x += 80) {
    for (var y = 40; y < height + 80; y += 40) {
      if (random() < 0.5) {
        fill('#D81B60');
      } else {
        fill('#000000');
      }
      ellipse(x-40, y-40, 6,20);
      noStroke();




    }
  }

}
