import React, { useEffect, useState } from "react";
import "../../assets/css/emailList.css";
import { Checkbox, IconButton } from "@mui/material";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import EmailRow from "../../components/Email/EmailRow";
import { db } from "../../firebase/EmailFireBase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";


const EmailList = () => {
  const [emails, setEmails] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setEmails(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  const filteredEmails = emails.filter(({ data }) => {
    const { to, subject, message } = data;
    const query = searchQuery.toLowerCase();
    return (
      to.toLowerCase().includes(query) ||
      subject.toLowerCase().includes(query) ||
      message.toLowerCase().includes(query)
    );
  });

  return (
    <div className="emailList">
        <Box
          sx={{backgroundColor:colors.primary[400],height:'100vh'}} 
        >
      <div className="emailList_settings">
        <Checkbox style={{color:"white"}} />
        <Box display="flex" justifyContent="end" p={2}>
          {/* SEARCH BAR */}
          <Box
            display="flex"
            flexDirection={"row-reverse"}
            backgroundColor={colors.primary[400]}
            borderRadius="3px"
          >
            <InputBase
              sx={{ ml: 2, flex: 1 }}
              placeholder="Search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
            <IconButton type="button" sx={{ p: 1 }}>
              <SearchIcon />
            </IconButton>
          </Box>
        </Box>
      </div>

      <div className="emailList_list">
        {filteredEmails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
      </div>
      </Box>
    </div>
  );
};
export default EmailList;
