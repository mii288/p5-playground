import p5 from 'p5'

export default (p: p5) => {
  let randomCounts: number[] = []
  p.setup = () => {
    p.createCanvas(640, 240)
    randomCounts = Array(20).fill(0)
  }

  p.draw = () => {
    p.background(255)

    const index = p.int(p.random(randomCounts.length))
    randomCounts[index]++

    p.stroke(0)
    p.fill(175)

    const w = p.width / randomCounts.length
    randomCounts.map((count, x) => {
      p.rect(x * w, p.height - count, w - 1, count)
    })
  }
}
