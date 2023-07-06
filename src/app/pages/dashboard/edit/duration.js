import React from "react"
import Styles from "./style"

import axios from "axios"
import { useParams } from "react-router"

const Duration = () => {
  const [data, setData] = React.useState([])
  const [values, setValues] = React.useState({
    duration: "",
  })

  const { id } = useParams()
  React.useEffect(() => {
    axios
      .get("http://localhost:3000/tourList/" + id)
      .then((res) => {
        setValues({ ...res.data, duration: res.data.duration })
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  console.log(values)
  const { duration } = values

  const [days, hours, minutes] = duration ? duration.split(" ") : ["", "", ""]

  const dayInt = parseInt(days)
  const hourInt = parseInt(hours)
  const minInt = parseInt(minutes)

  const handleChange = (e) => {
    e.preventDefault()
    axios
      .put("http://localhost:3000/tourList/" + id, values)
      .then((res) => {
        console.log("Duration Updated")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  console.log(data)
  return (
    <>
      <div style={Styles.ehNvyi}>
        <form onSubmit={handleChange}>
          <div>
            <div style={Styles.iAWZCU}>
              <h1 style={Styles.titleHeader}>
                What is the total duration of your experience?
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
                Inform your travellers about the duration of your experience so
                they can plan their time accordingly
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <div styles={Styles.inputContainer}>
                <label style={Styles.inputContainerLabel} htmlFor='days'>
                  Days:
                </label>
                <input
                  style={Styles.inputContainerInput}
                  type='number'
                  id='days'
                  value={dayInt}
                  min='0'
                  max='365'
                  onChange={(e) =>
                    setValues({ ...values, duration: e.target.value })
                  }
                />
              </div>
              <div styles={Styles.inputContainer}>
                <label style={Styles.inputContainerLabel} htmlFor='hours'>
                  Hours:
                </label>
                <input
                  style={Styles.inputContainerInput}
                  type='number'
                  id='hours'
                  value={hourInt}
                  min='0'
                  max='23'
                />
              </div>
              <div styles={Styles.inputContainer}>
                <label style={Styles.inputContainerLabel} htmlFor='minutes'>
                  Minutes:
                </label>
                <input
                  style={Styles.inputContainerInput}
                  type='number'
                  id='minutes'
                  value={minInt}
                  min='0'
                  max='59'
                />
              </div>
            </div>
          </div>
          <button type='submit' style={Styles.buttonTitle}>
            Update
          </button>
        </form>
      </div>
    </>
  )
}

export default Duration
