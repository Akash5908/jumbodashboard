import React from "react";
import CalendarSelectable from "app/pages/dashboard/calendar/CalendarSelectable";
import Salesfeed from "app/pages/dashboard/book/Salesfeed";
import Booking from "app/pages/dashboard/book/Booking";
import Page from "@jumbo/shared/Page";
import CalendarCulture from "app/pages/dashboard/calendar/CalendarCulture";
import OverView from "app/pages/dashboard/Experiences/overView";
import Dailydepartures from "app/pages/dashboard/book/Dailydepartures";
import MonthlyOverview from "app/pages/dashboard/book/Monthlyoverview";
import MetricPage from "app/metrics/Metrics";
import SearchBar from "app/pages/dashboard/operation/searchBar";


const dashboardRoutes = [
   
    {
        path: "createbooking",
        element: <Page component={Booking} />
    },
    {
        path: "/salesfeed",
        element: <Page component={Salesfeed} />
    },
    {
        path: "/calendar",
        element: <Page component={CalendarSelectable} />
    },
    {
        path: "/bookingdesk",
        element: <Page component={CalendarCulture} />
    },
    {
        path: "/overview",
        element: <Page component={OverView} />
    },
    {
        path: "/dailydepartures",
        element: <Page component={Dailydepartures} />
    },
    {
        path: "/monthlyoverview",
        element: <Page component={MonthlyOverview} />
    },
  
    { path: "operationsoverview", element: <Page component={SearchBar} /> },
    {
      path: "/reportsoverview",
      element: <Page component={MetricPage} />,
    },
];

export default dashboardRoutes;
