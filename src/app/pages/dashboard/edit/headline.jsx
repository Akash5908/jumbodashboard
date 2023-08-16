import React from "react"

import Styles from "./style"

import { useSelector } from "react-redux"

const Headline = (props) => {
  const addTour = useSelector((state) => state.addTour.addTour)
  return (
    <>
      <div style={Styles.ehNvyi}>
        <form action=''>
          <div>
            <div style={Styles.iAWZCU}>
              <h1 style={Styles.titleHeader}>{props.head}</h1>
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
                {props.subHead}
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Headline
