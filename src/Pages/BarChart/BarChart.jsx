import { memo } from "react";
import { Box } from "@mui/material";
import DataBarChart from "./DataBarChart";
import BreadCrumbs from "../../Components/BreadCrumbs";

function BarChart() {
  return (
    <Box sx={{ height: "75vh" , width:"98%"}}>
    <BreadCrumbs title={"Bar Chart"} subTitle={"The minimum wage in Germany, France and Spain (EUR/month)"}/>
      <DataBarChart/>
    </Box>
  );
}
export default memo(BarChart);
