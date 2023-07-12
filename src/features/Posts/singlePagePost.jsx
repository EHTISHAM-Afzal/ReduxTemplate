import React from 'react'
import { useSelector , } from 'react-redux'
import { useLocation , Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor'
import { ReactionButtons } from './ReactionButton'
import { TimeAgo } from './TimeAgo'
import { selectPostById } from './PostsSlice'

export const SinglePostPage = () => {
    const location = useLocation()
    const postId = location.pathname.split("/")[1]

    const post = useSelector(state => selectPostById(state, postId))



  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <React.Suspense >
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <div><PostAuthor userId={post.user}/> <TimeAgo timestamp={post.date}/></div>
        <p className="post-content">{post.content}</p>
        <ReactionButtons post={post}/>
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
    </React.Suspense>
  )
}