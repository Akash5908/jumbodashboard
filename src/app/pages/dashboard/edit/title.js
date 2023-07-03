import React from "react"
import Styles from "./style"

const Title = () => {
  return (
    <>
      <div style={Styles.ehNvyi}>
        <form action=''>
          <div>
            <div style={Styles.iAWZCU}>
              <h1 style={Styles.titleHeader}>
                Give your experience a short but descriptive name
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
                We recommend using simple language, keep it less than 80
                characters, mention what and where the experience is
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <input
                type='text'
                name=''
                id=''
                style={Styles.inputTitle}
                placeholder='Title...'
              />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Title
