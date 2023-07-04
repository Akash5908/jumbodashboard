import React from "react"
import Styles from "./style"

const PriceInput = () => {
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
