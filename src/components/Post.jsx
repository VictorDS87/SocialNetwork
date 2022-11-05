import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import {useState} from 'react'

import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post({ author, publishedAt, content }) {

  const [comments, setComments] = useState([
    'Post muito bacana, hein?!'
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function createNewComment (){
    event.preventDefault()

    setComments([...comments, newCommentText])

    setNewCommentText('')
  }
  function newCommentChange() {
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete) {
    const newCommentList = comments.filter(comment =>{
      return comment != commentToDelete
    })

    setComments(newCommentList)
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
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type == 'link' ) {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={createNewComment} className={styles.commentForm}>
        <strong>Deixe seu comentario: </strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentario"
          value = {newCommentText}
          onChange={newCommentChange}
          required
        />
        <footer>
          <button type="submit">Comentar</button>

        </footer>
      </form>

      
    </article>
  )
}