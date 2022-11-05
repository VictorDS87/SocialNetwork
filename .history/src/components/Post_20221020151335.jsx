import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post({ author, publishedAt, content }) {

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function createNewComment (){
    event.preventDefault()
    console.log('oi')

  }
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
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type == 'paragraph') {
            return <p>{line.content}</p>;
          } else if (line.type == 'link' ) {
            return <p><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={createNewComment} className={styles.commentForm}>
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