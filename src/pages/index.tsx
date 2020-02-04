import React from 'react'
import { NextPage } from 'next'
import LayoutDefault from '../components/layout'

const Index: NextPage<{ posts: Array<{ title: string }> }> = ({ posts }) => (
  <LayoutDefault posts={posts} content={<></>} />
)

Index.getInitialProps = () => {
  const posts = (({ keys }) =>
    keys().map(path => ({ title: path.replace(/^.*?\/(.*?)\..*$/, '$1') })))(
    require.context('../sketches', true, /\.ts$/)
  )

  return { posts }
}

export default Index
