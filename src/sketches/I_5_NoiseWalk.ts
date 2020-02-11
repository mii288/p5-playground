import p5, { Vector } from 'p5'

export default (p: p5) => {
  let walker: Walker
  class Walker {
    position: Vector
    noff: Vector

    constructor() {
      this.position = p.createVector(p.width / 2, p.height / 2)
      this.noff = p.createVector(0, 10000)
    }

    render() {
      p.stroke(0)
      p.point(this.position.x, this.position.y)
    }

    step() {
      this.position.x = p.map(p.noise(this.noff.x), 0, 1, 0, p.width)
      this.position.y = p.map(p.noise(this.noff.y), 0, 1, 0, p.height)

      this.noff.add(0.01, 0.01, 0)
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
