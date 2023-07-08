import { configureStore } from "@reduxjs/toolkit"
import AddTourReducer from "./editTour"
const Store = configureStore({
  reducer: {
    addTour: AddTourReducer,
  },
})

export default Store
