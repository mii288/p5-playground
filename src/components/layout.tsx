import React, { ReactChild } from 'react'
import Link from 'next/link'

const Default: React.FC<{
  subtitle?: string
  posts: Array<{ title: string }>
  content: ReactChild
}> = ({ subtitle = '', content, posts }) => (
  <div>
    <header>
      <h1>
        <Link href="/">
          <a>The Nature Of Code</a>
        </Link>
        {subtitle && <span>{subtitle}</span>}
      </h1>
    </header>
    <nav>
      <ol>
        {posts.map(post => (
          <li key={post.title}>
            <Link href={`/post?title=${post.title}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
    <main>{content}</main>
    <footer>
      <a href="https://github.com/mii288/p5-playground">@mii288</a>
    </footer>
    <style jsx>{`
      header h1 {
        padding: 0.5em 0;
        font-size: 1.5rem;
        font-weight: 900;
      }

      header a {
        color: currentColor;
        text-decoration: none;
        transition: color 0.2s;
      }

      header a:hover {
        color: #cc0066;
      }

      header span {
        color: #aaa;
        font-size: 1.2rem;
      }

      header span:before {
        content: '>';
        margin: 0 0.5em;
      }

      div {
        box-sizing: border-box;
        min-height: 100vh;
        max-width: 800px;
        margin: 0 auto;
        display: grid;
        padding: 1rem;
        grid-gap: 1rem;
        grid-template-rows: auto 1fr auto;
        grid-template-areas:
          'header'
          'sidebar'
          'content';
        grid-template-columns: 250px auto;
        grid-template-areas:
          'header   header'
          'sidebar  content'
          'footer   footer';
      }

      header {
        grid-area: header;
      }

      nav {
        grid-area: sidebar;
      }

      nav ol {
        position: relative;
        z-index: 0;
        padding-left: 2em;
      }

      nav li {
        position: relative;
        z-index: 0;
      }

      nav a {
        z-index: 0;
        padding: 0.75em 0.5em;
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        color: currentColor;
        text-decoration: none;
      }

      nav a:after {
        content: '';
        z-index: -2;
        display: block;
        position: absolute;
        background-color: rgba(255, 255, 255, 0.5);
        box-sizing: border-box;
        border: 3px solid #cc0066;
        left: -2em;
        top: 0;
        height: 100%;
        width: calc(100% + 1em);
        opacity: 0;
        transform: scale(0);
        transition: all 0.2s;
      }

      nav a:hover:after {
        opacity: 1;
        transform: scale(1);
      }

      main {
        grid-area: content;
      }

      footer {
        grid-area: footer;
        display: flex;
        justify-content: center;
        color: #aaa;
        padding-bottom: 2rem;
      }
    `}</style>
    <style global jsx>{`
      html {
        color: #333;
        font-size: 15px;
        font-weight: 400;
        font-family: 'Rubik', monospace;
        background: #efefef;
      }

      * {
        padding: 0;
        margin: 0;
      }
    `}</style>
  </div>
)

export default Default
