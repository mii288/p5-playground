import p5 from 'p5'

export default (p: p5) => {
  p.setup = () => {
    p.createCanvas(640, 360)
  }

  p.draw = () => {
    p.background(255)
    const mouse = p.createVector(p.mouseX, p.mouseY)
    const center = p.createVector(p.width / 2, p.height / 2)

    mouse.sub(center)

    mouse.normalize()
    mouse.mult(50)
    p.translate(p.width / 2, p.height / 2)
    p.line(0, 0, mouse.x, mouse.y)
  }
}
