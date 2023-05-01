import React, { useContext } from 'react';
import Cam from "../../assets/img/cam.png";
import Add from "../../assets/img/add.png";
import More from "../../assets/img/more.png";
import Messages from './Messages';
import Input from "../Chat/Input";
import { ChatContext } from '../../context/ChatContext';
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Chat = () => {
  const {data} = useContext(ChatContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <div className='chat'>
           <Box
             sx={{backgroundColor:colors.primary[600]}} 
         >
      <div className="chatInfo">
     

        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="camera" />
          <img src={Add} alt="add" />
          <img src={More} alt="more" />
        </div>
    
      </div>
      </Box>
      <Messages/>
      <Input/>
    </div>
  )
}
export default Chat