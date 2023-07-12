import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Ehtisham Afzal" },
  { id: "1", name: "Zeesham khan" },
  { id: "2", name: "Ahmed Sanan" },
];


export const UsersSlice = createSlice({
    name : "users",
    initialState,
    reducers : {}
});

export default UsersSlice.reducer;