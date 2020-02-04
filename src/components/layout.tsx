import React, { ReactChild } from 'react'
import Link from 'next/link'

const Default: React.FC<{
  posts: Array<{ title: string }>
  content: ReactChild
}> = ({ content, posts }) => (
  <div>
    <h1>The Nature Of Code</h1>
    <nav>
      {posts.map(post => (
        <Link key={post.title} href={`/post?title=${post.title}`}>
          <a>{post.title}</a>
        </Link>
      ))}
    </nav>
    <main>{content}</main>
  </div>
)

export default Default
