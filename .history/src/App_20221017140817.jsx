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
    publishedAt: new Date('2022-05-03 20:00:00'),
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
    publishedAt: new Date('2022-05-09 20:00:00'),
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Victor Donizete"
            content="Texto generico criado apenas para simular uma postagem"
          />
          <Post
            author="Fernanda Medeiros"
            content="Texto generico criado apenas para simular uma postagem"
          />
        </main>
      </div>
    </div>
  )
}


