import { configureStore } from "@reduxjs/toolkit"
import postsReducer from "../features/Posts/PostsSlice"
import UserREducer from "../features/users/UsersSlice"


export default configureStore({
  reducer: {
    posts: postsReducer,
    users : UserREducer
  }
})