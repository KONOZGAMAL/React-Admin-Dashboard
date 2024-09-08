import { Box } from "@mui/material"
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { memo } from "react"
import { rows , columns} from "./data"
import BreadCrumbs from "../../Components/BreadCrumbs";


 function Contacts() {
  return (
    <Box sx={{ height: 600, width: "94%", mx: "auto" }}>
    <BreadCrumbs title={"CONTACTS"} subTitle={"List of Contacts for Future Reference"}/>
    <DataGrid
          slots={{
            toolbar: GridToolbar,
          }}
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
  </Box>
  )
}
export default memo(Contacts)