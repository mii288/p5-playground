import p5 from 'p5'

export default (p: p5) => {
  p.setup = () => {
    p.createCanvas(640, 360)
    p.background(127)
  }

  p.draw = () => {
    const sd = 60
    const meanX = p.width / 2
    const meanY = p.height / 2
    const num = p.randomGaussian(0, 0)

    const x = sd * num + meanX
    const y = sd * num + meanY

    p.noStroke()
    p.fill(255, 10)
    p.ellipse(x, y, 16, 16)
  }
}
