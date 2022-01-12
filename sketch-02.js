const canvasSketch = require('canvas-sketch');

//Canvas

const settings = {
  //Dimension del canvas
  dimensions: [ 1080, 1080 ] //1080x1080
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillStyle='gray';

    const x = 0; /*Origin point of x*/ 
    const y = 0; /*Origin point of y*/

    //Invocation of the function Rect for rectangles
    const rectA = new Rect(400, 400, 300, 300);
    const rectB = new Rect(400, 0, 300, 300);

    //Invocation of the function Arc for Circles
    const arcA = new Arc(100, 0, 20, 0, 2 * Math.PI);
    const arcB = new Arc(100, 50, 20, 0, 2 * Math.PI);

    //Invocation of the function Line for lines
    const lineA = new Line(10, 10, 100, 100);

    //Invocation of the function Point for points
    const pointA = new Point(200, 0, 5, 0, 2 * Math.PI);

    //Make rectangle A in the canvas
    context.save(); //save
      context.beginPath();
        context.translate(x, y); //translate to x = 0 and y = 0
        context.rect(rectA.x, rectA.y, rectA.w , rectA.h);
        context.fill();
      context.closePath();
    context.restore(); //reset

    //Make rectangle B in the canvas
    context.save(); //save
      context.beginPath();
        context.translate(x, y); //translate to x = 0 and y = 0
        context.rect(rectB.x, rectB.y, rectB.w , rectB.h);
        context.fill();
      context.closePath();
    context.restore(); //reset

    //Make circle A in the canvas
    context.save(); //save
      context.beginPath();
        context.translate(x, y); //translate to x = 0 and y = 0
        context.arc(arcA.x, arcA.y, arcA.r, arcA.sa, arcA.ea)
        context.fill();
      context.closePath();
    context.restore(); //reset

    //Make circle B in the canvas
    context.save(); //save
      context.beginPath();
        context.translate(x, y); //translate to x = 0 and y = 0
        context.arc(arcB.x, arcB.y, arcB.r, arcB.sa, arcB.ea)
        context.fill();
      context.closePath();
    context.restore(); //reset

    //Make line A in the canvas
    context.save(); //save
      context.beginPath();
        context.translate(x, y); //translate to x = 0 and y = 0
        context.moveTo(lineA.x1, lineA.y1);
        context.lineTo(lineA.x2, lineA.y2);
        context.lineWidth = 5;
        context.stroke();
      context.closePath();
    context.restore(); //reset

    //Make point A in the canvas
    context.save(); //save
      context.beginPath();
        context.translate(x, y); //translate to x = 0 and y = 0
        context.arc(pointA.x, pointA.y, pointA.r, pointA.sa, pointA.ea)
        context.fill();
      context.closePath();
    context.restore(); //reset
 
  };
};

canvasSketch(sketch, settings);

//Clases

//Class Rect
class Rect{
  constructor(x, y, w/*width*/, h/*height*/){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
}

//Class Arc
class Arc{
  constructor(x, y, r /*radius*/, sa /*starting angle*/, ea/*ending angle*/){
    this.x = x;
    this.y = y;
    this.r = r;
    this.sa = sa;
    this.ea = ea;
  }
}

//Class Line
class Line{
  constructor(x1 /*x inicial*/, y1 /*y inicial*/, x2 /*x final*/, y2/*y final*/){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
}

//Class Point
class Point{
  constructor(x, y, r /*radius*/, sa /*starting angle*/, ea/*ending angle*/){
    this.x = x;
    this.y = y;
    this.r = r;
    this.sa = sa;
    this.ea = ea;
  }
}
