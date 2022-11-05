import styles from "./Sidebar.module.css"
import { PencilLine } from "phosphor-react"

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1659095579647-7c1bbc73b36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=10" alt="plano de fundo"
      />

      <div className={styles.profile}>
        <img src="https://github.com/viviij.png" alt="Foto de perfil" />

        <strong>Darkon</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <img src={PencilLine} alt="" />
        <a href="#">Editar seu perfil</a>
      </footer>
    </aside>
  )
}