import { configureStore } from "@reduxjs/toolkit"
import AllUsers from "../features/Slice"

export const Store = configureStore ({
    reducer : {
        users : AllUsers
    }
})