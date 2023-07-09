import './App.css'
import { PostsList } from './features/Posts/PostsLists'
import { AddPostForm } from './features/Posts/AddPostsForm'


function App() {
  return (
    <div className="App">
      <AddPostForm />
      <PostsList />
    </div>
  )
}


export default App
