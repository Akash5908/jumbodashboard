import React from "react"
import Headline from "./headline"

import PriceName from "./priceName"
import PriceInput from "./priceInput"
import Styles from "./style"

import Button from "@mui/material/Button"
import SendIcon from "@mui/icons-material/Save"
import Stack from "@mui/material/Stack"
import axios from "axios"
import { useParams } from "react-router"
import { useEffect } from "react"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Price = () => {
  const [Price, setPrice] = React.useState({ price: "" })

  const { id } = useParams()

  useEffect(() => {
    axios
      .get("http://localhost:3000/tourList/" + id)
      .then((res) => {
        setPrice({ ...res.data, price: res.data.price })
      })
      .catch((err) => console.log(err))
  }, [])

  console.log(Price)

  const priceChange = (value) => {
    setPrice({ ...Price, price: value })
  }

  const handleClick = (e) => {
    e.preventDefault()
    axios
      .put("http://localhost:3000/tourList/" + id, Price)
      .then((res) => {
        toast.success("Status Updated successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        })
        console.log(res)
      })
      .catch((err) => {
        toast.error("Error updating status!", {
          position: toast.POSITION.TOP_RIGHT,
        })
        console.log(err)
      })
  }
  return (
    <>
      <Headline
        head={"Define your pricing structure"}
        subHead={
          "You can set up prices for your different pricing categories, rates, and additional extras. These prices will automatically be converted to other currencies, so you dont have to worry about exchange rates"
        }
      />

      {/* <form onSubmit={handleClick}> */}

      <PriceName TourName='Regular' />
      <PriceInput onPriceChange={priceChange} />
      <PriceName TourName='Group' />
      <PriceInput />
      <PriceName TourName='Couple Private Tour' />
      <PriceInput />
      <PriceName TourName='Family Private Tour' />
      <PriceInput />
      <PriceName TourName='Family Private Tour' />
      <PriceInput />
      <PriceName TourName='VIP' />
      <PriceInput />
      <PriceName TourName='Special' />
      <PriceInput />
      <PriceName TourName='Other' />
      <PriceInput />

      <div style={{ marginTop: "5%" }}>
        <div style={{ margin: "1%" }}>
          <Stack direction='row'>
            <Button
              variant='contained'
              endIcon={<SendIcon />}
              style={{ margin: "auto" }}
            >
              Save Price
            </Button>
          </Stack>
        </div>
      </div>
    </>
  )
}

export default Price
