import React from "react"
import { Grid } from "@mui/material"
import ChartSalesOverview from "../Metric/SalesOverview/ChartSalesOverview"
import SalesOverviewTable from "../Metric/SalesOverview/SalesOverview"
import OrdersReport from "../Metric/OrdersReport/OrdersReport"
import Orders from "../Metric/Orders/Orders"
import SalesReport from "../Metric/SalesReport1"
const MetricPage = () => {
  return (
    <Grid container spacing={3.75}>
      <Grid item xs={12} sm={6} lg={3}>
        <ChartSalesOverview />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <SalesReport />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <SalesOverviewTable />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <OrdersReport />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Orders />
      </Grid>
    </Grid>
  )
}

export default MetricPage
