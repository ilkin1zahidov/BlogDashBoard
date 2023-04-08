import {ColorModeContext, useMode} from "./theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {Routes, Route, Navigate} from "react-router-dom"
import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";
import Dashboard from "./pages/dashboard/dashboard";
import Team from "./pages/team/team";
import Invoices from "./pages/invoices/invoices";
import Contacts from "./pages/contacts/contacts";
import Form from "./pages/form/form";
import Calendar from "./pages/calendar/calendar";
import FAQ from "./pages/faq/faq";
import Bar from "./pages/bar/bar";
import Pie from "./pages/pie/pie";
import Line from "./pages/line/line";
import Geography from "./pages/geography/goeography";
import Register from "./pages/ChatRegister/ChatRegister";
import Login from "./pages/ChatLogin/ChatLogin";
import ChatHome from "./pages/ChatHome/ChatHome";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import EmailHome from "./pages/EmailHome/EmailHome";
import Mail from "./pages/mail/Mail";
import EmailList from "./components/Email/EmailList";

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
               <Route path="/form" element={<Form />} />
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
              
                 
        </Routes>
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
