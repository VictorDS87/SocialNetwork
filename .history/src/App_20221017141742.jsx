import { Header } from "./components/header";
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from "./App.module.css"
import "./global.css"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/viviij.png',
      name: 'Victor Donizete',
      role: 'Vagabundo'
    },
    content: [
      {type: 'paragraph', content:  'In today`s post, we provide an update on the technical investigations we`ve undertaken in  the last year and shar'},
      {type: 'paragraph', content: 'our evolving vision for Hytale. Plus: a peek at the changing face'},
      {type: 'paragraph', content: 'of Orbis, powerful new tools, and more! ☀️'},
      {type: 'link', content: 'https://hytale.com/news/2022/7/summer-2022-development-update'},
    ],
    publishedAt: new Date('2022-10-15 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/pato.png',
      name: 'Pato Patilino',
      role: 'CEO PatosAFEF'
    },
    content: [
      {type: 'paragraph', content:  'In today`s post, we provide an update on the technical investigations we`ve undertaken in  the last year and shar'},
      {type: 'paragraph', content: 'our evolving vision for Hytale. Plus: a peek at the changing face'},
      {type: 'paragraph', content: 'of Orbis, powerful new tools, and more! ☀️'},
      {type: 'link', content: 'https://hytale.com/news/2022/7/summer-2022-development-update'},
    ],
    publishedAt: new Date('2022-10-17 20:00:00'),
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}

            />
          )
          })}
        </main>
      </div>
    </div>
  )
}


