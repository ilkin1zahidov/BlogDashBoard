import React from 'react';
import "../../assets/css/chatHeader.css";
import { Box, IconButton, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
const EmailHeader = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div className='emailHeader'>
      <div className="header_left">
          <h2>INBOX</h2>
          <p>Email/Inbox</p>
      </div>

      <Box display="flex" justifyContent="end" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        flexDirection={'row-reverse'}
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

    
    </Box>

      <div className="header_right">
          
      </div>

      
    </div>
  )
}
export default EmailHeader