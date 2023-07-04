import React from "react"

import Styles from "./style"

const PriceName = (props) => {
  return (
    <>
      {/* <div style={Styles.uploadContainer}> */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <div style={Styles.insidePrice}>
          <div style={Styles.PriceTitle}>{props.TourName}</div>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}

export default PriceName
