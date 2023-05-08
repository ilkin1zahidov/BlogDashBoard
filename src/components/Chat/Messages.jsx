import React, { useContext, useEffect, useState } from 'react';
import { ChatContext } from "../../context/ChatContext";
import Message from "../Chat/Message";
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from "../../firebase/ChatFirebase";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
const Messages = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages)
    })
    return () => {
      unSub()
    }
  }, [data.chatId])
  return (
    <Box
        sx={{ backgroundColor: colors.primary[400], height: '70vh' }}
      >
    <div className='messages'>
      


        {messages.map((m) => (
          <Message message={m} key={m.id} />
        ))}

    
    </div>
    </Box>
  )
}
export default Messages