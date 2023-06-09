import React, { useEffect, useState } from "react"
import Typography from "@mui/material/Typography"
import Chip from "@mui/material/Chip"
import ShowChartIcon from "@mui/icons-material/ShowChart"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import Stack from "@mui/material/Stack"
import JumboCardQuick from "@jumbo/components/JumboCardQuick"
import Span from "@jumbo/shared/Span"
import { useTranslation } from "react-i18next"
import axios from "axios"

const Orders = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:3000/response")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }, [])

  const { t } = useTranslation()
  return (
    <JumboCardQuick
      title={
        <Typography variant={"h5"} mb={0}>
          {t("widgets.title.orders1")}
        </Typography>
      }
      action={
        <Stack direction={"row"} spacing={1}>
          <Chip label={"Annual"} color={"warning"} size={"small"} />
          <ShowChartIcon fontSize={"small"} />
        </Stack>
      }
      wrapperSx={{ textAlign: "center" }}
      headerSx={{
        borderBottom: 1,
        borderBottomColor: "divider",
      }}
    >
      <Typography variant={"h2"}>{data.length}</Typography>
      <Typography variant={"body1"}>
        Past week:
        <Span sx={{ color: "success.main", ml: 1 }}>
          4,626
          <TrendingUpIcon
            fontSize={"small"}
            sx={{ verticalAlign: "middle", ml: 1 }}
          />
        </Span>
      </Typography>
    </JumboCardQuick>
  )
}

export default Orders
