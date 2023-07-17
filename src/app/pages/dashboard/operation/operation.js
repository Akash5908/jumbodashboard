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
import is from "date-fns/esm/locale/is/index.js"

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

export default function ToggleStatus({ date, searchText }) {
  const formattedDate = date.format("DD MM YYYY")
  const [data, setData] = useState([])
  const [checkRows, setCheckedRows] = useState([])
  const [noTour, setNoTour] = useState([])
  const [value, setValue] = useState({ id: "", name: "" })

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
  }, [])

  useEffect(() => {
    setValue([])
  }, [formattedDate])

  const handleChange = (event, id) => {
    if (!event.target.checked) {
      const newValue = initialRows.filter((obj) => !(obj.id !== id))
      setCheckedRows([...checkRows, newValue[0].tour])
    } else {
      const newValue = initialRows.filter((obj) => !(obj.id !== id))
      setCheckedRows(checkRows.filter((tour) => tour !== newValue[0].tour))
    }

    console.log(checkRows, "checkRows")

    setValue((prevValue) => ({
      ...prevValue,
      id: formattedDate,
      name: checkRows,
    }))
  }
  console.log(value, "value")
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
    setTimeout(() => {
      window.location.reload()
    }, 700)
  }

  // useEffect(() => {
  //   noTour.map((tour) => {
  //     if (tour.name.length === 0) {
  //       axios
  //         .delete(`http://localhost:3000/notour/${formattedDate}`)
  //         .then((res) => {
  //           console.log(res.data)
  //         })
  //         .catch((err) => {
  //           console.log(err)
  //         })
  //     }
  //   })
  // }, [])

  const initialRows = data
    .filter((tour) => {
      if (searchText.trim() === "") return true
      return tour.name.toLowerCase().includes(searchText.toLowerCase())
    })
    .map((tour, index) => ({
      id: tour.id,
      tour: tour.name,
    }))

  const isTourChecked = (tourName) => {
    const existingTour = noTour.find((item) => item.id === formattedDate)
    if (existingTour && existingTour.name) {
      return !existingTour.name.includes(tourName)
    }
    return true
  }

  const [rows, setRows] = React.useState([])
  const [rowModesModel, setRowModesModel] = React.useState({})

  useEffect(() => {
    setRows(initialRows)
  }, [data, searchText])

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
        const tourname = rows.find((tour) => tour.id === id)?.tour
        const checked = isTourChecked(tourname)
        return [
          <GridActionsCellItem
            icon={
              <IOSSwitch
                sx={{ m: 1 }}
                checked={checked}
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
      />
    </Box>
  )
}
