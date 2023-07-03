import React from "react"
import Styles from "./style"

import Button from "@mui/material/Button"

import Stack from "@mui/material/Stack"

const Photos = () => {
  return (
    <>
      <div style={Styles.ehNvyi}>
        <form action=''>
          <div>
            <div style={Styles.iAWZCU}>
              <h1 style={Styles.titleHeader}>
                A photo is worth a thousand words!
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
                We recommend that you add at least 5 high quality photos to your
                experience with various angles and views
              </p>
            </div>

            <div style={Styles.uploadContainer}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Stack direction='row' alignItems='center' spacing={2}>
                  <Button variant='contained' component='label'>
                    Upload
                    <input hidden accept='image/*' multiple type='file' />
                  </Button>
                </Stack>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Photos
