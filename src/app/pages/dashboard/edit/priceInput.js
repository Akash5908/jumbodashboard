import React from "react"
import Styles from "./style"

import axios from "axios"
import { useParams } from "react-router"

import Button from "@mui/material/Button"
import SendIcon from "@mui/icons-material/Save"
import Stack from "@mui/material/Stack"

const PriceInput = ({ onPriceChange }) => {
  const [data, setData] = React.useState({
    price: "",
  })

  const { id } = useParams()

  React.useEffect(() => {
    axios
      .get("http://localhost:3000/tourList/" + id)
      .then((res) => {
        setData({ ...res.data, price: res.data.price })
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const { price } = data

  const Price = parseInt(price)

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .put("http://localhost:3000/tourList/" + id, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
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
                  value={Price.price}
                  onChange={(e) => {
                    setData({ ...data, price: e.target.value })
                    onPriceChange(Price)
                  }}
                />
                <div style={Styles.currency}>INR</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "5%" }}>
          <div style={{ margin: "1%" }}>
            <Stack direction='row'>
              <Button
                type='submit'
                variant='contained'
                endIcon={<SendIcon />}
                style={{ margin: "auto" }}
              >
                Update
              </Button>
            </Stack>
          </div>
        </div>
      </form>
    </>
  )
}

export default PriceInput
