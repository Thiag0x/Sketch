const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillStyle='blue';

    //Aqui invocas a la clase Rect para crear un nuevo rectangulo
    const rectA = new Rect(400, 700, 300, 300);
    const rectB = new Rect(400, 200, 300, 300);


    const arcA = new Arc(100, 100, 20, 0, 2 * Math.PI);
    const arcB = new Arc(100, 200, 20, 0, 2 * Math.PI);

    //Creacion del rectangulo A en el canvas
    context.save(); //save
    context.beginPath();
    context.rect(rectA.x, rectA.y, rectA.w , rectA.h);
    context.fill();
    context.restore(); //reset

    //Creacion del rectangulo B en el canvas
    context.save(); //save
    context.beginPath();
    context.rect(rectB.x, rectB.y, rectB.w , rectB.h);
    context.fill();
    context.restore(); //reset

    context.save();
    context.beginPath();
    context.arc(arcA.x, arcA.y, arcA.r, arcA.sa, arcA.ea)
    context.fill();
    context.restore();

    context.save();
    context.beginPath();
    context.arc(arcB.x, arcB.y, arcB.r, arcB.sa, arcB.ea)
    context.fill();
    context.restore();
  };
};

canvasSketch(sketch, settings);

//Creacion de la clase Rect para definir los rectangulos
class Rect{
  constructor(x, y, w, h){
    this.x = x
    this.y = y
    this.w = w
    this.h = h
  }
}

class Arc{
  constructor(x, y, r, sa, ea){
    this.x = x
    this.y = y
    this.r = r
    this.sa = sa
    this.ea = ea
  }
}