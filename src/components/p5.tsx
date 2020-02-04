import React, { useState, useEffect, useRef } from 'react'
import P5Instance from 'p5'

/* eslint-disable-next-line */
const P5: React.SFC<{ sketch: (...args: any[]) => any }> = props => {
  const [canvas, setP5] = useState<P5Instance>()
  const wrapper = useRef(null)

  useEffect(() => {
    setP5(new P5Instance(props.sketch, wrapper.current || undefined))
  }, [props.sketch])

  // fix duplicate p5 canvas
  useEffect(
    () => () => {
      if (canvas) canvas.remove()
    },
    [canvas]
  )

  return <div ref={wrapper} style={{ textAlign: 'center' }} />
}

export default P5
