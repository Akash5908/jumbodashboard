import React from "react"
import Styles from "./style"
import Headline from "./headline"

import Button from "@mui/material/Button"
import SendIcon from "@mui/icons-material/Save"
import Stack from "@mui/material/Stack"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Description = () => {
  return (
    <>
      {/* <div style={Styles.ehNvyi}> */}
      <Headline
        head={" Tell your travellers what the experience is all about"}
        subhead={
          "Describe your experience in detail, using exciting and engaging language to capture the essence of the experience"
        }
      />
      <form action=''>
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
