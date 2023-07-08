import * as React from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import SendIcon from "@mui/icons-material/Send"
import Stack from "@mui/material/Stack"

import Title from "../edit/title"
import Duration from "../edit/duration"
import Location from "../edit/location"
import Photos from "../edit/photos"
import Price from "../edit/price"
import Description from "../edit/description"

import { useSelector } from "react-redux"
import { useParams } from "react-router"
import { useEffect } from "react"

// const tabLabels = [
//   "Title",
//   "Duration",
//   "Location",
//   "Description",
//   "Price",
//   "Photos",
// ]
// const tabComponents = [Title, Duration, Location, Description, Price, Photos]

const TabButton = () => {
  const addTour = useSelector((state) => state.addTour.addTour)
  const [value, setValue] = React.useState(0)
  const { id } = useParams()
  const tabLabels = addTour
    ? ["Title"]
    : ["Title", "Duration", "Location", "Description", "Price", "Photos"]

  const tabComponents = addTour
    ? [Title]
    : [Title, Duration, Location, Description, Price, Photos]

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/tourList/" + id)
  //     .then((res) => (res.data))
  //     .catch((err) => console.log(err))
  // }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleTabChange = (index) => {
    setValue(index)
  }

  const renderComponent = () => {
    const Component = tabComponents[value]
    return <Component />
  }

  return (
    <>
      <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: "background.paper" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant='scrollable'
          scrollButtons={true}
          aria-label='scrollable prevent tabs example'
        >
          {tabLabels.map((label, index) => (
            <Tab
              key={index}
              label={label}
              onClick={() => handleTabChange(index)}
            />
          ))}
        </Tabs>
      </Box>
      {renderComponent()}
      <div style={{ marginTop: "5%" }}>
        <div style={{ margin: "1%" }}>
          <Stack direction='row' spacing={120}>
            <Button
              variant='outlined'
              onClick={() =>
                value > 0
                  ? setValue(value - 1)
                  : setValue(tabComponents.length - 1)
              }
            >
              Back
            </Button>
            <Button
              variant='contained'
              endIcon={<SendIcon />}
              onClick={() => {
                value < tabComponents.length - 1
                  ? setValue(value + 1)
                  : setValue(0)
                console.log(value)
              }}
            >
              Continue
            </Button>
          </Stack>
        </div>
      </div>
    </>
  )
}

export default TabButton
