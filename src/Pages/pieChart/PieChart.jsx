import { Box, useTheme } from "@mui/material"
import { memo } from "react"
import Pie from "./Pie"
import BreadCrumbs from "../../Components/BreadCrumbs";

 function PieChart(){
  const theme = useTheme();
  return (
    <Box sx={{width:"90%"}}>
    <BreadCrumbs title={"Pie Chart"} subTitle={"Simple Pie Chart"}/>
     <Pie/>
    </Box>
  )
}
export default memo(PieChart)