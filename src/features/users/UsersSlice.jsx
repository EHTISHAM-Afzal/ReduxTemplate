import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../Api/client'

const initialState = [
  { id: "0", name: "Ehtisham Afzal" },
  { id: "1", name: "Zeesham khan" },
  { id: "2", name: "Ahmed Sanan" },
]

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await client.get('/fakeApi/users')
  return response.data
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload
    })
  }
})

export default usersSlice.reducer





// import { createSlice } from "@reduxjs/toolkit";

// const initialState = [
//   { id: "0", name: "Ehtisham Afzal" },
//   { id: "1", name: "Zeesham khan" },
//   { id: "2", name: "Ahmed Sanan" },
// ];


// export const UsersSlice = createSlice({
//     name : "users",
//     initialState,
//     reducers : {}
// });

// export default UsersSlice.reducer;