import p5 from 'p5'

export default (p: p5) => {
  let walker: Walker
  class Walker {
    x: number
    y: number

    constructor() {
      this.x = p.width / 2
      this.y = p.height / 2
    }

    render() {
      p.stroke(0)
      p.point(this.x, this.y)
    }

    step() {
      const stepX = p.random(-1, 1)
      const stepY = p.random(-1, 1)

      this.x += stepX
      this.y += stepY

      // refs: https://p5js.org/reference/#/p5/constrain
      this.x = p.constrain(this.x, 0, p.width - 1)
      this.y = p.constrain(this.y, 0, p.height - 1)
    }
  }

  p.setup = () => {
    p.createCanvas(640, 360)
    walker = new Walker()
    p.background(127)
  }

  p.draw = () => {
    walker.step()
    walker.render()
  }
}
