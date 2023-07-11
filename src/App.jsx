import { PostsList } from './features/Posts/PostsLists'
import { AddPostForm } from './features/Posts/AddPostsForm'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import { SinglePostPage } from './features/Posts/singlePagePost'
import  EditPostForm  from './features/Posts/EditPostForm'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes >
          <Route path='/'  element={<NavBar/>}>
          <Route index  element={<><AddPostForm /> <PostsList /> </>}/>
          <Route path='/create'  element={<AddPostForm />}/>
          <Route path="/:postId" element={<SinglePostPage/>}/>
          <Route path="/editPost/:postId" element={<EditPostForm/>} />
          <Route path="*" element={<h1>404</h1>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}


export default App
