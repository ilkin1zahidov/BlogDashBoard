import React from 'react';
import EmailHeader from "../../components/Email/EmailHeader"
import EmailSideBar from '../../components/Email/EmailSideBar';
import EmailList from '../../components/Email/EmailList';
import "../../assets/css/emailHome.css";
const EmailHome = () => {
  return (
    <>  
      
        <div className='email--Home'>
         <EmailHeader/> 
         <div className="email_Side">
         <EmailSideBar/>
          <div className="email_body">
          <EmailList/>
          </div>
   
         </div>
   
    
        </div>

    </>

  )
}
export default EmailHome