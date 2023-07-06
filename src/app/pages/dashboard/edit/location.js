import React from "react"
import Styles from "./style"

import axios from "axios"
import { useParams } from "react-router"

const Location = () => {
  const [data, setData] = React.useState([])

  const { id } = useParams()
  React.useEffect(() => {
    axios
      .get("http://localhost:3000/tourList/" + id)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <div style={Styles.ehNvyi}>
        <form action=''>
          <div>
            <div style={Styles.iAWZCU}>
              <h1 style={Styles.titleHeader}>
                What is the location of your experience?
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
                Inform travellers about the city or town where your experience
                takes place. This will help with filtering and searching online
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <label htmlFor='locationInput' style={{ width: "100%" }}>
                Location:
                <input
                  type='text'
                  id='locationInput'
                  value={data.location}
                  name=''
                  style={Styles.inputTitle}
                  placeholder='Enter Location..'
                  required
                />
              </label>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Location
