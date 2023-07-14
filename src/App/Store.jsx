import { configureStore } from "@reduxjs/toolkit"
import postsReducer from "../features/Posts/PostsSlice"
import UserREducer from "../features/Users/UsersSlice"


export default configureStore({
  reducer: {
    posts: postsReducer,
    users : UserREducer
  }
})

// import { configureStore } from '@reduxjs/toolkit'

// import notificationsReducer from '../features/notifications/notificationsSlice'
// import { apiSlice } from '../features/api/apiSlice'

// export default configureStore({
//   reducer: {
//     notifications: notificationsReducer,
//     [apiSlice.reducerPath]: apiSlice.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiSlice.middleware),
// })