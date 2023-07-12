import React from 'react'
import { useSelector , } from 'react-redux'
import { useLocation , Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor'
import { ReactionButtons } from './ReactionButton'

export const SinglePostPage = () => {
    const location = useLocation()

  const post = useSelector(state =>
    state.posts.filter(post => `/${post.id}` === location.pathname)[0]
  )


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
        <PostAuthor userId={post.user}/>
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