import {ColorModeContext, useMode} from "./theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {Routes, Route, Navigate} from "react-router-dom"
import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";
import Dashboard from "./pages/dashboard";
import Team from "./pages/team";
import Invoices from "./pages/invoices";
import Contacts from "./pages/contacts";
import Calendar from "./pages/calendar";
import FAQ from "./pages/faq";
import Bar from "./pages/bar";
import Pie from "./pages/pie";
import Line from "./pages/line";
import Geography from "./pages/geography";
import Register from "./pages/ChatRegister";
import Login from "./pages/ChatLogin";
import ChatHome from "./pages/ChatHome";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import EmailHome from "./pages/EmailHome";
import Mail from "./pages/mail";
import SendEmail from "./components/Email/SendEmail";
import StarredMails from "./pages/StarredMails";

function App() {
  const [theme, colorMode] = useMode();
  const {currentUser} =  useContext(AuthContext)
  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children
  };
  return (<ColorModeContext.Provider value = {colorMode}>
    <ThemeProvider theme = {theme}>
     <CssBaseline />
    <div className="app">
      <Sidebar/>
      <main className="content">
        <Topbar/>
        <Routes>
              <Route path="/" element={<Dashboard />} />
               <Route path="/team" element={<Team />} />
               <Route path="/contacts" element={<Contacts />} />
               <Route path="/invoices" element={<Invoices />} />
               <Route path="/calendar" element={<Calendar />} />
               <Route path="/faq" element={<FAQ />} />
               <Route path="/bar" element={<Bar />} />
               <Route path="/pie" element={<Pie />} />
               <Route path="/line" element={<Line />} />
               <Route path="/geography" element={<Geography />} /> 
               <Route 
                  path="/chatHome"
                  index
                  element={
                  <ProtectedRoute>
                   <ChatHome/>
                  </ProtectedRoute>} />
                <Route path= "/register" element={<Register/>} /> 
                <Route path= "/login" element={<Login/>}/>
                <Route path = "/emailHome" element={<EmailHome/>} />
                <Route path = "/mail" element= {<Mail/>} /> 
                <Route path = "/sendMail" element={<SendEmail/>} />
                <Route path = "StarMail" element={<StarredMails/>} />
        </Routes>
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
