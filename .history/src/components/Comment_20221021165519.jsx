import { ThumbsUp, Trash } from "phosphor-react"
import { Avatar } from "./Avatar"
import {useState} from 'react'

import styles from "./Comment.module.css"

export function Comment({ content, deleteComment }) {
  function deleteCommentFunc() {
    deleteComment(content)
  }

  const [likeCount, setLikeCount] = useState(0)

  function likeComment() {
    setLikeCount(likeCount + 1)
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/viviij.png" alt="Imagem de perfil" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Victor Donizete</strong>
              <time
                title="1 de agosto as 00:13h"
                dateTime="2022-05-11 00:13:46">Cerca de 1h atras
              </time>
            </div>

            <button onClick={deleteCommentFunc} title="deletar comentario">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={likeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}