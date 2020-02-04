import React, { useState, useEffect, useRef } from 'react'
import P5Instance from 'p5'

/* eslint-disable-next-line */
const P5: React.SFC<{ sketch: (...args: any[]) => any }> = props => {
  const [, setP5] = useState<P5Instance>()
  const wrapper = useRef(null)

  useEffect(() => {
    setP5(new P5Instance(props.sketch, wrapper.current || undefined))
  }, [props.sketch])

  return <div ref={wrapper} />
}

export default P5
