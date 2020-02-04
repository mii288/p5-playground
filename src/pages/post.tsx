import React from 'react'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Error from 'next/error'
import Layout from '../components/layout'

const P5 = dynamic(import('../components/p5'), {
  loading() {
    return <p>loading...</p>
  },
  ssr: false,
})

const Post: NextPage<{ name: string; posts: Array<{ title: string }> }> = ({
  name,
  posts,
}) => {
  try {
    const sketch = require(`../sketches/${name}`).default

    return (
      <Layout
        posts={posts}
        content={
          <section>
            <h1>{name}</h1>
            <P5 sketch={sketch} />
          </section>
        }
      />
    )
  } catch (error) {
    return <Error statusCode={404} />
  }
}

Post.getInitialProps = context => ({
  name: String(context.query.title),
  posts: (({ keys }) =>
    keys().map(path => ({ title: path.replace(/^.*?\/(.*?)\..*$/, '$1') })))(
    require.context('../sketches', true, /\.ts$/)
  ),
})

export default Post
