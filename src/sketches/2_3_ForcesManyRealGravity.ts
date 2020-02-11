import p5, { Vector } from 'p5'

export default (p: p5) => {
  class Mover {
    location: Vector
    velocity: Vector
    acceleration: Vector
    mass: number

    constructor(mass: number, x: number, y: number) {
      this.location = p.createVector(x, y)
      this.velocity = p.createVector(0, 0)
      this.acceleration = p.createVector(0, 0)
      this.mass = mass
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
      p.fill(p.map(this.mass, 0.1, 5, 255, 0), 100)
      p.ellipse(this.location.x, this.location.y, 20, 20)
    }
  }

  let movers: Mover[]
  p.setup = () => {
    p.createCanvas(640, 360)
    movers = Array(100)
      .fill(0)
      .map(() => new Mover(p.random(0.1, 5), 1, 1))
  }

  p.draw = () => {
    p.background(255)

    const wind = p.createVector(0.001, 0)
    movers.map(m => {
      const gravity = p.createVector(0, 0.1 * m.mass)

      m.applyForce(gravity)
      m.applyForce(wind)

      m.update()
      m.display()
      m.checkEdges()
    })
  }
}
