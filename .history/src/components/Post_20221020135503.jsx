import { format } from 'date-fns'

import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post(props) {
  const publishedDateFormatted = format(props.author.publishedAt, "d 'de' LLLL 'às' HH:mm'h'")
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={props.author.avatarUrl} alt="Foto do perfil" />
          <div className={styles.authorInfo}>
            <strong>{props.author.role}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>
        <time title="" dateTime="2022-05-11 00:13:46">{publishedDateFormatted}</time>
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