import p5 from 'p5'

export default (p: p5) => {
  const loc = p.createVector(0, 0)
  const velocity = p.createVector(1, 3.3)

  p.setup = () => {
    p.createCanvas(640, 360)
    p.background(127)
  }

  p.draw = () => {
    p.background(127)
    loc.x += velocity.x
    loc.y += velocity.y

    if (loc.x > p.width || loc.x < 0) {
      velocity.x *= -1
    }

    if (loc.y > p.height || loc.y < 0) {
      velocity.y *= -1
    }

    p.stroke(0)
    p.fill(175)
    p.ellipse(loc.x, loc.y, 16, 16)
  }
}
