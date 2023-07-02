import React from "react"
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined"
import SellOutlinedIcon from "@mui/icons-material/SellOutlined"
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined"
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined"
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined"
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"

const menus = [
  {
    label: "Bookings..   ",
    type: "collapsible",
    icon: <CalendarMonthOutlinedIcon />,
    children: [
      {
        uri: "/createbooking",
        label: "Create Booking",
        type: "nav-item",
        icon: <FiberManualRecordIcon />,
      },
      {
        uri: "/salesfeed",
        label: "Sales feed",
        type: "nav-item",
      },
      {
        uri: "/calendar",
        label: "Calendar",
        type: "nav-item",
      },
      {
        uri: "/bookingdesk",
        label: "Booking Desk",
        type: "nav-item",
      },
      {
        uri: "/dailydepartures",
        label: "Daily departures",
        type: "nav-item",
      },
      {
        uri: "/monthlyoverview",
        label: "Monthly overview",
        type: "nav-item",
      },
    ],
  },
  {
    label: "Experiences",
    type: "collapsible",
    icon: <SellOutlinedIcon />,
    children: [
      {
        uri: "/overview",
        label: "Experiences overview",
        type: "nav-item",
      },
      // {
      //   uri: "/edittour",
      //   label: "Tour-Edit",
      //   type: "nav-item",
      // },
    ],
  },
  {
    label: "Sales tools",
    type: "collapsible",
    icon: <LocalGroceryStoreOutlinedIcon />,
    children: [
      {
        uri: "/salesoverview",
        label: "Sales Overview",
        type: "nav-item",
      },
    ],
  },
  {
    label: "Operations",
    type: "collapsible",
    icon: <ContentCopyOutlinedIcon />,
    children: [
      {
        uri: "/operationsoverview",
        label: "Operations Overview",
        type: "nav-item",
      },
    ],
  },
  {
    label: "Reports",
    type: "collapsible",
    icon: <SignalCellularAltOutlinedIcon />,
    children: [
      {
        uri: "/reportsoverview",
        label: "Reports Overview",
        type: "nav-item",
      },
    ],
  },
]

export default menus
