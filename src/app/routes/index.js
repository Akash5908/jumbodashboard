import React from "react";
import Home from "../pages/home";
import Page from "@jumbo/shared/Page";
import Booking from "app/pages/dashboard/book/Booking";
import Login1 from "app/pages/auth-pages/login1/Login1";
import Login2 from "app/pages/auth-pages/login2/Login2";
import Setting from "app/pages/dashboard/features/setting";
import Salesfeed from "app/pages/dashboard/book/Salesfeed";
import CalendarRendering from "app/pages/dashboard/calendar/CalendarRendering";



/**
 routes which you want to make accessible to both authenticated and anonymous users
 **/
const routesForPublic = [
    {
        path: "/",
        element: <Page component={Home} />
    },

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
        element: <Page component={CalendarRendering} />
    },
    {
        path: "/auth-pages/login-1",
        element: <Page component={Login1} />
    },
    {
        path: "/auth-pages/login-2",
        element: <Page component={Login2} />
    },
    {
        path: "/user/login2",
        element: <Page component={Login2} />
    },
];

/**
 routes only accessible to authenticated users
 **/
const routesForAuthenticatedOnly = [];

/**
 routes only accessible when user is anonymous
 **/
const routesForNotAuthenticatedOnly = [];


const routes = [
    ...routesForPublic,
    ...routesForAuthenticatedOnly,
    ...routesForNotAuthenticatedOnly,
];

export {routes as default, routesForPublic, routesForNotAuthenticatedOnly, routesForAuthenticatedOnly};