import { memo } from "react";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Row1 from "./Row1";
import { Box, Button, Stack } from "@mui/material";
import { DownloadOutlined } from "@mui/icons-material";
import BreadCrumbs from "../../Components/BreadCrumbs";

function Dashboard() {
  return (
    <div>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignContent={"center"}
      >
        <BreadCrumbs
          title={"DASHBOARD"}
          subTitle={"Welcome to your dashboard"}
        />
        <Box sx={{ textAlign: "right", mb: 1.3 }}>
          <Button
            sx={{ padding: "6px 8px", textTransform: "capitalize" }}
            variant="contained"
            color="primary"
          >
            <DownloadOutlined />
            Download Reports
          </Button>
        </Box>
      </Stack>

      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}
export default memo(Dashboard);
