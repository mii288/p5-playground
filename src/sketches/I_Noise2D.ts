import p5 from 'p5'

export default (p: p5) => {
  const noff = p.createVector(0, 0)
  const increment = 0.02

  p.setup = () => {
    p.createCanvas(640, 360)
    p.noLoop()

    p.pixelDensity(1)
    p.background(0)
  }

  p.draw = () => {
    p.loadPixels()

    noff.x = 0
    for (let x = 0; x < p.width; x++) {
      noff.x += increment
      noff.y = 0

      for (let y = 0; y < p.height; y++) {
        noff.y += increment

        const i = (x + y * p.width) * 4

        p.pixels[i + 0] = 0
        p.pixels[i + 1] = 0
        p.pixels[i + 2] = 0

        // set alpha
        p.pixels[i + 3] = p.noise(noff.x, noff.y) * 255
      }
    }

    p.updatePixels()
  }
}
