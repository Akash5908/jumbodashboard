import React from "react";
import Home from "app/pages/home/Home";
import Page from "@jumbo/shared/Page";
import Login2 from "app/pages/auth-pages/login2/Login2";
import dashboardRoutes from "./dashboardRoutes";
import Signup2 from "app/pages/auth-pages/signup2/Signup2";
import appsRoutes from "./appsRoutes";


/**
 routes which you want to make accessible to both authenticated and anonymous users
 **/
const routesForPublic = [
  
];

/**
 routes only accessible to authenticated users
 **/
const routesForAuthenticatedOnly = [
    {
        path: "/",
        element: <Page component={Home} />
    },
    ...dashboardRoutes,
    ...appsRoutes,
];

/**
 routes only accessible when user is anonymous
 **/
const routesForNotAuthenticatedOnly = [
    {
        path: "/user/login",
        element: <Page component={Login2} layout={"solo-page"} disableSmLogin={true}/>
    },
    {
        path: "/user/signup",
        element: <Signup2/>
    },
];


const routes = [
  ...routesForPublic,
  ...routesForAuthenticatedOnly,
  ...routesForNotAuthenticatedOnly,
];

export {routes as default, routesForPublic, routesForNotAuthenticatedOnly, routesForAuthenticatedOnly};