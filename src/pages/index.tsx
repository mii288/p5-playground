import React from 'react'
import { NextPage } from 'next'
import LayoutDefault from '../components/layout'

const Index: NextPage<{ posts: Array<{ title: string }> }> = ({ posts }) => (
  <LayoutDefault posts={posts} content={<></>} />
)

Index.getInitialProps = () => {
  return {
    posts: [{ title: 'chp00_01_random_walker' }],
  }
}

export default Index
