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
      {posts.map((post, index) => (
        <Link key={post.title} href={`/post?title=${post.title}`}>
          <a>
            {index + 1}. {post.title}
          </a>
        </Link>
      ))}
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
        grid-template-columns: 300px auto;
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

      nav a {
        z-index: 0;
        padding: 0.5em 0.5em;
        position: relative;
        display: block;
        width: 100%;
        box-sizing: border-box;
      }

      nav a:after {
        content: '';
        z-index: -2;
        display: block;
        position: absolute;
        background-color: rgba(255, 255, 255, 0.6);
        box-sizing: border-box;
        border: 3px solid #cc0066;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
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

      @media screen and (max-width: 1000px) {
        div {
          grid-template-columns: none;
          grid-template-rows: auto auto 1fr auto;
          grid-template-areas:
            'header'
            'sidebar'
            'content'
            'footer';
        }

        nav a {
          display: inline-block;
          width: auto;
        }
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

      a {
        text-decoration: none;
        color: currentColor;
      }
    `}</style>
  </div>
)

export default Default
