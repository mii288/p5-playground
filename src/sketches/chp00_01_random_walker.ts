import p5 from 'p5'

export default (p: p5) => {
  p.setup = () => {
    p.createCanvas(300, 300)
  }

  p.draw = () => {
    p.background(240)
    if (p.mouseX === 0 && p.mouseY === 0) return
    p.fill(255, 0, 0)
    p.noStroke()
    p.ellipse(p.mouseX, p.mouseY, 100, 100)
  }
}
