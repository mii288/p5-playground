import React from 'react'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import sketch from '../sketch/chp00_01_random_walker'

const P5 = dynamic(import('../components/p5'), { ssr: false })

const Post: NextPage = () => {
  const router = useRouter()

  return (
    <section>
      <h1>{router.query.title}</h1>
      <P5 sketch={sketch} />
    </section>
  )
}

export default Post
