import * as React from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"

import Title from "../edit/title"

export default function TabButton() {
  const [value, setValue] = React.useState(0)
  const [selectedTab, setSelectedTab] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleTabChange = (e, a) => {
    setSelectedTab(a)
  }

  const renderComponent = () => {
    switch (selectedTab) {
      case 1:
        return <Title />
      case 2:
        return <h1>sdsdjkh</h1>
      default:
        return null
    }
  }

  return (
    <>
      <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: "background.paper" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant='scrollable'
          scrollButtons={false}
          aria-label='scrollable prevent tabs example'
        >
          <Tab label='Title' onClick={(e) => handleTabChange(e, 1)} />
          <Tab label='Duration' onClick={(e) => handleTabChange(e, 2)} />
          <Tab label='Location' />
          <Tab label='Description' />
          <Tab label='Photos' />
          <Tab label='Inclusions' />
          <Tab label='Exclusion' />
        </Tabs>
      </Box>
      {renderComponent()}
    </>
  )
}
