import React from "react"
import { useSelector } from "react-redux"

const Home = () => {
  const myApi = useSelector((state) => state.changeTheApi)
  return (
    <div>
      <h2>Sample blank page</h2>
      <p>This page is just to showcase the way you can add your own pages.</p>
      {/* <p>{myApi.description}</p> */}
    </div>
  )
}

export default Home
