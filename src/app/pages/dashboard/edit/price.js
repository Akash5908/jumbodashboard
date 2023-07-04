import React from "react"

import PriceName from "./priceName"
import PriceInput from "./priceInput"
import Styles from "./style"

import Button from "@mui/material/Button"
import SendIcon from "@mui/icons-material/Save"
import Stack from "@mui/material/Stack"

const Price = () => {
  return (
    <>
      <div style={Styles.ehNvyi}>
        <form action=''>
          <div>
            <div style={Styles.iAWZCU}>
              <h1 style={Styles.titleHeader}>Define your pricing structure</h1>
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
                You can set up prices for your different pricing categories,
                rates, and additional extras. These prices will automatically be
                converted to other currencies, so you don't have to worry about
                exchange rates
              </p>
            </div>
            <PriceName TourName='Regular' />
            <PriceInput />
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
            {/* <div
              style={{
                textAlign: "center",
                marginTop: "40px",
                marginBottom: "40px",
              }}
          </div> */}
          </div>
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
        </form>
      </div>
    </>
  )
}

export default Price
