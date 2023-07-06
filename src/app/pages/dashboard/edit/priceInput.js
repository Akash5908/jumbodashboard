import React from "react"
import Styles from "./style"

import axios from "axios"
import { useParams } from "react-router"

const PriceInput = () => {
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

  const { price } = data

  const Price = parseInt(price)

  return (
    <>
      <div
        style={{
          width: "100%",
          marginBottom: "24px",
          border: "1px solid rgb(221, 221, 221)",
        }}
      >
        <div style={Styles.inputPrice}>
          <div style={Styles.insideInputPrice}>
            <div>Adult</div>
            <div style={{ display: "flex" }}>
              <input
                type='number'
                style={Styles.PriceInput}
                placeholder='Enter Price...'
                value={Price}
              />
              <div style={Styles.currency}>INR</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PriceInput
