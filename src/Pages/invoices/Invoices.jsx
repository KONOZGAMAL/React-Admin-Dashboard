import { memo } from "react"
import { Box } from "@mui/material"
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows , columns} from "./data"
import BreadCrumbs from "../../Components/BreadCrumbs";

 function Invoices() {
  return (
    <Box sx={{ height: 600, width: "94%", mx: "auto" }}>
    <BreadCrumbs title={"INVOICES"} subTitle={"List of Invoice Balances"}/>
    <DataGrid
        checkboxSelection
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
export default memo(Invoices)