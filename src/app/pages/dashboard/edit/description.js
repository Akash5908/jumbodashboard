import React from "react"
import Styles from "./style"

import Button from "@mui/material/Button"
import SendIcon from "@mui/icons-material/Save"
import Stack from "@mui/material/Stack"

const Description = () => {
  return (
    <>
      {/* <div style={Styles.ehNvyi}> */}
      <form action=''>
        <div>
          <div style={Styles.iAWZCU}>
            <h1 style={Styles.titleHeader}>
              Tell your travellers what the experience is all about
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
              Describe your experience in detail, using exciting and engaging
              language to capture the essence of the experience
            </p>
          </div>

          <form>
            <div>
              <label
                htmlFor='shortDescriptionInput'
                style={Styles.inputContainerLabel}
              >
                Short Description:
                <input
                  style={Styles.inputTitle}
                  type='text'
                  id='shortDescriptionInput'
                  //   value={shortDescription}
                  //   onChange={handleShortDescriptionChange}
                  required
                />
              </label>
            </div>
            <div>
              <label
                htmlFor='descriptionInput'
                style={Styles.inputContainerLabel}
              >
                Description:
                <textarea
                  style={Styles.inputTitle}
                  id='descriptionInput'
                  //   value={description}
                  //   onChange={handleDescriptionChange}
                  required
                ></textarea>
              </label>
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
        </div>
        {/* <div style={{ marginTop: "5%" }}>
            <div style={{ margin: "1%" }}>
              <Stack direction='row' spacing={120}>
                <Button variant='outlined'>Back</Button>
                <Button variant='contained' endIcon={<SendIcon />}>
                  Continue
                </Button>
              </Stack>
            </div>
          </div> */}
      </form>
      {/* </div> */}
    </>
  )
}

export default Description
