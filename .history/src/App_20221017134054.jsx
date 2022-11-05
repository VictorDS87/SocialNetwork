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
    }
    // content: ;
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


