import paper from 'paper';
import rough from 'roughjs';

paper.install(window);

window.onload = () => {
  // Generate paper.js graph
  paper.setup('paper');
  const viewWidth = view.size.width;
  const viewHeight = view.size.height;

  const strokeColor = 'white';
  const strokeWidth = 2;

  const firstDiagonal = new Path.Line({
    from: new Point(0, 0),
    to: new Point(viewWidth, viewHeight),
    strokeColor: strokeColor,
    strokeWidth: strokeWidth
  });

  const secondDiagonal = new Path.Line({
    from: new Point(0, viewHeight),
    to: new Point(viewWidth, 0),
    strokeColor: strokeColor,
    strokeWidth: strokeWidth
  });

  const firstVertical = new Path.Line({
    from: new Point(viewWidth/4, viewHeight/4),
    to: new Point(viewWidth/4, (viewHeight/4)*3),
    strokeColor: strokeColor,
    strokeWidth: strokeWidth
  });

  const secondVertical = new Path.Line({
    from: new Point((viewWidth/4)*3, viewHeight/4),
    to: new Point((viewWidth/4)*3, (viewHeight/4)*3),
    strokeColor: strokeColor,
    strokeWidth: strokeWidth
  });

  const circle = new Path.Circle({
    center: new Point(view.center),
    radius: view.center.subtract(new Point(view.size.width/4, view.size.height/4)).length,
    strokeColor: strokeColor,
    strokeWidth: strokeWidth
  });

  // Generate SVG for using with rough.js
  const roughCanvasElement = document.createElement('canvas');
  roughCanvasElement.width = viewWidth;
  roughCanvasElement.height = viewHeight;
  // document.body.appendChild(project.exportSVG());
  document.body.appendChild(roughCanvasElement);

  const roughCanvas = rough.canvas(
    roughCanvasElement,
    { options: {
      stroke: 'white',
      strokeWidth: strokeWidth,
      roughness: 2.7,
      bowing: 2
    } }
  );

  // Array.from(document.getElementsByTagName('path')).forEach((path) => {
  Array.from(project.exportSVG().querySelectorAll('path')).forEach((path) => {
    roughCanvas.path(path.getAttribute('d'));
    roughCanvas.path(path.getAttribute('d'));
    roughCanvas.path(path.getAttribute('d'));
    roughCanvas.path(path.getAttribute('d'));
    roughCanvas.path(path.getAttribute('d'));
  });
}
