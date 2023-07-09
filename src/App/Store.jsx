import { configureStore } from "@reduxjs/toolkit"
import AllUsers from "../features/CounterSlice"

export const Store = configureStore ({
    reducer : {
        users : AllUsers
    }
})