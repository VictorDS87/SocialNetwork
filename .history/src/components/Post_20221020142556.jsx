import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post({ author, publishedAt }) {
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} alt="Foto do perfil" />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title="" dateTime="2022-05-11 00:13:46"></time>
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