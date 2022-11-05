import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post(props) {
  console.log(props)
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={props.author.avatarURL} alt="Foto do perfil" />
          <div className={styles.authorInfo}>
            <strong>Victor Donizete</strong>
            <span>Web developer</span>
          </div>
        </div>
        <time title="1 de agosto as 00:13h" dateTime="2022-05-11 00:13:46">Publicado a uma hora</time>
      </header>

      <form className={styles.commentForm}>
        <strong>Deixe seu comentario: </strong>

        <textarea
          placeholder="Deixe um comentario"
        />
        <footer>
          <button type="submit">Comentar</button>

        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}