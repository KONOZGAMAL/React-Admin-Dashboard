import { Box } from "@mui/material"
import { memo } from "react"
import Line from "./Line";
import BreadCrumbs from "../../Components/BreadCrumbs";


 function LineChart() {
  return (
    <Box sx={{width:"98%"}}>
    <BreadCrumbs title={"Line Chart"} subTitle={"Simple Line Chart"}/>
     <Line/>
    </Box>
  )
}
export default memo(LineChart)