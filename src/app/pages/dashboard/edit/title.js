import React from "react"
import Styles from "./style"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { editTourAction } from "app/reducToolkit/editTour"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"

const Title = (props) => {
  const { id } = useParams()

  const [values, setValues] = useState({
    name: "",
  })

  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:3000/tourList/" + id)
      .then((res) => setValues({ ...res.data, name: res.data.name }))
      .catch((err) => console.log(err))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    axios
      .put("http://localhost:3000/tourList/" + id, values)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  // useEffect(() => {
  //   setTitle(data.name)
  // }
  // useEffect(() => {
  //   dispatch(editTourAction.title(title))
  // }
  return (
    <>
      <div style={Styles.ehNvyi}>
        <form onSubmit={handleSubmit}>
          <div>
            <div style={Styles.iAWZCU}>
              <h1 style={Styles.titleHeader}>
                Give your experience a short but descriptive name
              </h1>
            </div>
            <div
              style={{
                textAlign: "center",
                marginBottom: "40px",
                height: "10px",
              }}
            >
              <p
                style={{
                  fontSize: "18px",
                  color: "#999999",
                  marginBottom: "0px",
                }}
              >
                {" "}
                We recommend using simple language, keep it less than 80
                characters, mention what and where the experience is
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <input
                type='text'
                name=''
                id=''
                value={values.name}
                style={Styles.inputTitle}
                placeholder='Title...'
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
            </div>
          </div>
          <button type='submit' style={Styles.buttonTitle}>
            <h1>Update</h1>
          </button>
        </form>
      </div>
    </>
  )
}

export default Title
