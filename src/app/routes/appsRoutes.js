import React from "react";

import Page from "@jumbo/shared/Page";
import Bookbytime from "app/pages/dashboard/book/bookbytime";
import TourEdit from "app/pages/dashboard/Experiences/tourEdit";
import TourAdd from "app/pages/dashboard/Experiences/tourAdd";

const appsRoutes = [
    {
        path: [
            "/bookingdesk/activity"
        ],
        element: <Page component={Bookbytime}/>,
    },
    {
        path: "overview/addTour",
        element: <Page component={TourAdd} />,
    },
    {
        path: "overview/touredit/:id",
        element: <Page component={TourEdit} />,
      },
];

export default appsRoutes;
