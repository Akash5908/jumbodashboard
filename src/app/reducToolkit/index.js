import { createStore } from "redux"
import { configureStore } from "@reduxjs/toolkit"
import EditTourReducer from "./editTour"
const Store = configureStore({
  reducer: {
    editTour: EditTourReducer,
  },
})

export default Store
