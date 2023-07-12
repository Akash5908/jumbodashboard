import React, { useState, useEffect } from "react"
import Box from "@mui/material/Box"

import axios from "axios"

import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid"
import { styled } from "@mui/material/styles"
import Button from "@mui/material/Button"
import SendIcon from "@mui/icons-material/Save"
import Stack from "@mui/material/Stack"

import Switch from "@mui/material/Switch"
import { set } from "date-fns-jalali"
import { init } from "i18next"

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName='.Mui-focusVisible' disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}))

export default function ToggleStatus({ date }) {
  const formattedDate = date.format("DD MM YYYY")
  const [data, setData] = useState([])
  const [checkRows, setCheckedRows] = useState([])
  const [noTour, setNoTour] = useState([])
  const [value, setValue] = useState({ id: "", name: "" })
  let tourName = false

  useEffect(() => {
    axios
      .get("http://localhost:3000/tourList")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    axios
      .get("http://localhost:3000/notour")
      .then((res) => setNoTour(res.data))
      .catch((err) => console.log(err))
  }, [noTour])

  const handleChange = (event, id) => {
    if (!event.target.checked) {
      const newValue = initialRows.filter((obj) => obj.id == id)
      console.log(newValue, "newValue")
      setCheckedRows([...checkRows, newValue[0].tour])
    }
    console.log(checkRows, "checkRows")

    setValue((prevValue) => ({
      ...prevValue,
      id: formattedDate,
      name: checkRows,
    }))
  }

  const buttonClick = (e) => {
    e.preventDefault()
    console.log(value, "setvalue")

    const existingIndex = noTour.findIndex((tour) => tour.id === value.id)

    if (existingIndex !== -1) {
      const updatedNoTour = [...noTour]
      updatedNoTour[existingIndex].name = checkRows
      axios
        .put(
          `http://localhost:3000/notour/${formattedDate}`,
          updatedNoTour[existingIndex]
        )
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      if (value.name.length > 0) {
        axios
          .post("http://localhost:3000/notour", value)
          .then((res) => {
            console.log(res.data)
            // Handle success if needed
          })
          .catch((err) => {
            console.log(err)
            // Handle error if needed
          })
      }
    }
  }

  // const buttonClick = (e) => {
  //   e.preventDefault()

  //   console.log(value, "setvalue")
  // }

  // useEffect(() => {
  //   if (value) {
  //     axios
  //       .post("http://localhost:3000/notour", value)
  //       .then((res) => console.log(res.data))
  //       .catch((err) => console.log(err))
  //     tourName = !tourName
  //   }
  // }, [value])

  const initialRows = data.map((tour, index) => ({
    id: tour.id,
    tour: tour.name,
  }))

  const [rows, setRows] = React.useState([])
  const [rowModesModel, setRowModesModel] = React.useState({})

  useEffect(() => {
    setRows(initialRows)
  }, [data])

  const columns = [
    {
      field: "id",
      headerName: "DBC ID",
      type: "number",
      width: 80,
      align: "left",
      headerAlign: "left",
      editable: true,
      filterable: true,
    },
    {
      field: "tour",
      headerName: "Tour Name",
      width: 700,
      editable: true,
      align: "left",
      headerAlign: "left",
      filterable: true,
    },

    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      filterable: true,
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={
              <IOSSwitch
                sx={{ m: 1 }}
                defaultChecked
                onChange={(event) => handleChange(event, id)}
              />
            }
            label='Status'
            sx={{
              color: "primary.main",
            }}
          />,
        ]
      },
    },
  ]

  return (
    <Box
      sx={{
        height: 500,
        width: "100%",
        "& .actions": {
          color: "text.secondary",
        },
        "& .textPrimary": {
          color: "text.primary",
        },
      }}
    >
      <div style={{ marginTop: "1%" }}>
        <div style={{ margin: "1%" }}>
          <Stack direction='row'>
            <Button
              type='submit'
              variant='contained'
              endIcon={<SendIcon />}
              style={{ margin: "auto" }}
              onClick={(e) => buttonClick(e)}
            >
              Update
            </Button>
          </Stack>
        </div>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        editMode='row'
        rowModesModel={rowModesModel}
        // onRowModesModelChange={handleRowModesModelChange}
        // onRowEditStop={handleRowEditStop}
        // processRowUpdate={processRowUpdate}
        // slots={{
        //   toolbar: EditToolbar,
        // }}
        // slotProps={{
        //   toolbar: { setRows, setRowModesModel },
        // }}
      />
    </Box>
  )
}
