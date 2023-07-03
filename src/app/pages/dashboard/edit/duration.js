import React from "react"
import Styles from "./style"

const Duration = () => {
  return (
    <>
      <div style={Styles.ehNvyi}>
        <form action=''>
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
                <label style={Styles.inputContainerLabel} for='days'>
                  Days:
                </label>
                <input
                  style={Styles.inputContainerInput}
                  type='number'
                  id='days'
                  min='0'
                  max='365'
                  required
                />
              </div>
              <div styles={Styles.inputContainer}>
                <label style={Styles.inputContainerLabel} for='hours'>
                  Hours:
                </label>
                <input
                  style={Styles.inputContainerInput}
                  type='number'
                  id='hours'
                  min='0'
                  max='23'
                  required
                />
              </div>
              <div styles={Styles.inputContainer}>
                <label style={Styles.inputContainerLabel} for='minutes'>
                  Minutes:
                </label>
                <input
                  style={Styles.inputContainerInput}
                  type='number'
                  id='minutes'
                  min='0'
                  max='59'
                  required
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Duration
