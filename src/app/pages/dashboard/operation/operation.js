import React, { useState, useEffect } from "react"
import Box from "@mui/material/Box"

import axios from "axios"

import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid"
import { styled } from "@mui/material/styles"
import Button from "@mui/material/Button"
import SendIcon from "@mui/icons-material/Save"
import Stack from "@mui/material/Stack"

import Switch from "@mui/material/Switch"

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

export default function ToggleStatus({ text, date }) {
  const ID = date
  const [data, setData] = useState([])
  const [checkRows, setCheckedRows] = useState({
    id: "",
    name: "",
  })
  const [noTour, setNoTour] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:3000/tourList")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
    axios
      .get("http://localhost:3000/notour")
      .then((res) => setNoTour(res.data))
      .catch((err) => console.log(err))
  }, [data, noTour])

  const handleChange = (event, id) => {
    if (!event.target.checked) {
      const newObject = initialRows.find((row) => {
        if (row.id === id) {
          return { row }
        }
        return false
      })
      // setNoTour((prev) => {
      //   const updatedObjects = prev.map((obj) => {
      //     if (obj.id === newObject.id) {
      //       return { ...obj, tour: [{ ...obj.tourname, newObject.tour.name }] }
      //     }
      //   })
      // })
    }

    //   const isChecked = event.target.checked
    //   let checkedRow = []
    //   //event.target.checked give the true & false on check/unchecked
    //   if (!isChecked) {
    //     checkedRow = initialRows.find((row) => {
    //       if (row.id === id) {
    //         return { id: ID.format("DD MM YYYY"), name: row.name }
    //       } else return false
    //     })
    //   } else {
    //   }
    //   console.log(checkedRow, "checkedRow")
    // }
    //   useEffect(() => {
    //     console.log(checkRows, "checkRows")
    //     if (checkRows) {
    //       console.log("inside if")
    //       axios.post("http://localhost:3000/notour", checkRows)
    //     }
    //   }, [checkRows])
  }

  const initialRows = data.map((tour, index) => ({
    id: tour.id,
    tour: [{ name: tour.name }],
  }))

  const [rows, setRows] = React.useState([])
  const [rowModesModel, setRowModesModel] = React.useState({})

  useEffect(() => {
    setRows(initialRows)
  }, [data, text])

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
      field: "name",
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
