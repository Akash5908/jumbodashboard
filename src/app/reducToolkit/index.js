import { configureStore } from "@reduxjs/toolkit"
import AddTourReducer from "./editTour"



const Store1 = configureStore({
  reducer: {
    addTour: AddTourReducer,
  },
})

export default Store1
