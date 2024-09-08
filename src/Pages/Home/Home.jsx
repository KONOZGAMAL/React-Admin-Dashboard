import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TopHeader from '../../Components/TopHeader';
import SideBar from '../../Components/SideBar';

import { getDesignTokens } from "../../Components/theme";
import { useMemo, useState } from "react";

import {  createTheme , ThemeProvider } from "@mui/material/styles";
import { Outlet } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



export default function MiniDrawer() {

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [mode, setMode] = useState(
   localStorage.getItem("currentMode")
      ? localStorage.getItem("currentMode")
      : "light"
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
       <TopHeader open={open} handleDrawerOpen={handleDrawerOpen} setMode={setMode} />

      <SideBar open={open} handleDrawerClose={handleDrawerClose}/>
  
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        
        <Outlet />
      </Box>
    </Box>
    </ThemeProvider>
  );
}
