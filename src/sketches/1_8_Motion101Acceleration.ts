import p5, { Vector } from 'p5'

export default (p: p5) => {
  class Mover {
    location: Vector
    velocity: Vector
    acceleration: Vector
    topSpeed: number

    constructor() {
      this.location = p.createVector(p.width, p.height)
      this.velocity = p.createVector(0, 0)
      this.acceleration = p.createVector(-0.001, 0.01)
      this.topSpeed = 10
    }

    update() {
      this.velocity.add(this.acceleration)
      this.velocity.limit(this.topSpeed)

      this.location.add(this.velocity)
    }

    checkEdges() {
      if (this.location.x > p.width) {
        this.location.x = 0
      } else if (this.location.x < 0) {
        this.location.x = p.width
      }

      if (this.location.y > p.height) {
        this.location.y = 0
      } else if (this.location.y < 0) {
        this.location.y = p.height
      }
    }

    display() {
      p.stroke(0)
      p.fill(175)
      p.ellipse(this.location.x, this.location.y, 16, 16)
    }
  }

  let mover: Mover
  p.setup = () => {
    p.createCanvas(640, 360)
    mover = new Mover()
  }

  p.draw = () => {
    p.background(255)

    mover.update()
    mover.checkEdges()
    mover.display()
  }
}
