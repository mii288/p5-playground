import p5 from 'p5'

export default (p: p5) => {
  p.setup = () => {
    p.createCanvas(400, 400)
    p.background(127)
  }

  p.draw = () => {
    const r = p.constrain(p.randomGaussian(0, 250), 0, 255)
    const g = p.constrain(p.randomGaussian(50, 100), 0, 255)
    const b = p.constrain(p.randomGaussian(200, 50), 0, 255)
    p.fill(r, g, b, 20)
    p.noStroke()

    // mean: 平均
    const mean = p.width / 2
    // sd: standard deviation = 標準偏差
    const sd = p.width / 15
    const x = p.randomGaussian(mean, sd)
    const y = p.randomGaussian(mean, sd)

    p.ellipse(x, y, 40, 40)
  }
}
