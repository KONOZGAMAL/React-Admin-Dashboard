import { memo } from "react";
import {
  Badge,
  Box,
  IconButton,
  InputBase,
  Stack,
  styled,
  Toolbar,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";

function TopHeader({ open, handleDrawerOpen, setMode }) {
  const theme = useTheme();

  console.log(theme.palette.background.paper);

  const drawerWidth = 240;
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
      {
        // @ts-ignore
        props: ({ open }) => open,
        style: {
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
          transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
      },
    ],
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <AppBar
      position="fixed"
      // @ts-ignore
      open={open}
      style={{ boxShadow: "none" }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={[
            {
              marginRight: 5,
            },
            open && { display: "none" },
          ]}
        >
          <MenuIcon />
        </IconButton>

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Box flexGrow={1} />

        <Stack direction="row">
          {theme.palette.mode === "light" ? (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "currentMode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                setMode((prevMode) =>
                  prevMode === "light" ? "dark" : "light"
                );
              }}
              aria-label="delete"
              color="inherit"
            >
              <LightModeOutlinedIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "currentMode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                setMode((prevMode) =>
                  prevMode === "light" ? "dark" : "light"
                );
              }}
              aria-label="delete"
              color="inherit"
            >
              <DarkModeOutlinedIcon />
            </IconButton>
          )}

          <IconButton aria-label="delete" color="inherit">
            <FullscreenExitIcon />
          </IconButton>

          <IconButton aria-label="delete" color="inherit">
            <Badge
              badgeContent={4}
              // @ts-ignore
              color="secondary"
            >
              <NotificationsNoneOutlinedIcon />
            </Badge>
          </IconButton>

          <IconButton color="inherit" aria-label="add an alarm">
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="add to shopping cart">
            <PersonOutlinedIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default memo(TopHeader);

TopHeader.propTypes = {
  open: PropTypes.bool.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
  setMode: PropTypes.func.isRequired,
};
