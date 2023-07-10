import React from "react"
import Home from "../pages/home"
import Page from "@jumbo/shared/Page"
import Booking from "app/pages/dashboard/book/Booking"
import Login1 from "app/pages/auth-pages/login1/Login1"
import Login2 from "app/pages/auth-pages/login2/Login2"
import Setting from "app/pages/dashboard/features/setting"
import OverView from "app/pages/dashboard/Experiences/overView"
import TourEdit from "app/pages/dashboard/Experiences/tourEdit"
import TourAdd from "app/pages/dashboard/Experiences/tourAdd"

import MetricPage from "app/metrics/Metrics"
import Salesfeed from "app/pages/dashboard/book/Salesfeed"

import CalendarSelectable from "app/pages/dashboard/calendar/CalendarSelectable"
import { element } from "prop-types"

/**
 routes which you want to make accessible to both authenticated and anonymous users
 **/
const routesForPublic = [
  {
    path: "/",
    element: <Page component={Home} />,
  },

  {
    path: "createbooking",
    element: <Page component={Booking} />,
  },
  {
    path: "/salesfeed",
    element: <Page component={Salesfeed} />,
  },
  {
    path: "/calendar",
    element: <Page component={CalendarSelectable} />,
  },
  {
    path: "overview",
    element: <Page component={OverView} />,
  },
  {
    path: "overview/addTour",
    element: <Page component={TourAdd} />,
  },
  {
    path: "overview/touredit/:id",
    element: <Page component={TourEdit} />,
  },
  {
    path: "/reportsoverview",
    element: <Page component={MetricPage} />,
  },
  {
    path: "/setting",
    element: <Page component={Setting} />,
  },
  {
    path: "/auth-pages/login-1",
    element: <Page component={Login1} />,
  },
  {
    path: "/auth-pages/login-2",
    element: <Page component={Login2} />,
  },
  {
    path: "/user/login2",
    element: <Page component={Login2} />,
  },
]

/**
 routes only accessible to authenticated users
 **/
const routesForAuthenticatedOnly = []

/**
 routes only accessible when user is anonymous
 **/
const routesForNotAuthenticatedOnly = []

const routes = [
  ...routesForPublic,
  ...routesForAuthenticatedOnly,
  ...routesForNotAuthenticatedOnly,
]

export {
  routes as default,
  routesForPublic,
  routesForNotAuthenticatedOnly,
  routesForAuthenticatedOnly,
}
