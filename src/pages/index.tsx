import React from 'react'
import Link from 'next/link'

const Home: React.FC<{ pages: Array<{ title: string }> }> = ({ pages }) => (
  <div>
    <nav>
      {pages.map(page => (
        <Link key={page.title} href={`/post?title=${page.title}`}>
          ${page.title}
        </Link>
      ))}
    </nav>
  </div>
)

export default Home
