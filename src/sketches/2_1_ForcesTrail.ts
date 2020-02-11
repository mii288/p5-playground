import p5, { Vector } from 'p5'

export default (p: p5) => {
  class Mover {
    location: Vector
    velocity: Vector
    acceleration: Vector
    mass: number

    constructor() {
      this.location = p.createVector(30, 30)
      this.velocity = p.createVector(0, 0)
      this.acceleration = p.createVector(0, 0)
      this.mass = 1
    }

    applyForce(force: Vector) {
      const f = p5.Vector.div(force, this.mass)
      this.acceleration.add(f)
    }

    update() {
      this.velocity.add(this.acceleration)
      this.location.add(this.velocity)
      this.acceleration.mult(0)
    }

    checkEdges() {
      if (this.location.x > p.width) {
        this.velocity.x *= -1
        this.location.x = p.width
      } else if (this.location.x < 0) {
        this.velocity.x *= -1
        this.location.x = 0
      }

      if (this.location.y > p.height) {
        this.velocity.y *= -1
        this.location.y = p.height
      }
    }

    display() {
      p.stroke(0)
      p.fill(175)
      p.ellipse(this.location.x, this.location.y, 16, 16)
    }
  }

  let m: Mover
  p.setup = () => {
    p.createCanvas(640, 360)
    m = new Mover()
  }

  p.draw = () => {
    p.background(255)

    const gravity = p.createVector(0, 0.1)
    const wind = p.createVector(0.1, 0)

    m.applyForce(gravity)
    m.applyForce(wind)

    m.update()
    m.display()
    m.checkEdges()
  }
}
