import React from 'react';
import EmailHeader from "../../components/Email/EmailHeader"
import EmailSideBar from '../../components/Email/EmailSideBar';
import EmailList from '../EmailList/EmailList';
import "../../assets/css/emailHome.css";
import SendEmail from '../../components/Email/SendEmail';
const EmailHome = () => {
  return (
    <>  
      
        <div className='email--Home'>
         <EmailHeader/> 

         <div className="email_Side">
         <EmailSideBar/>
         <EmailList/>
         </div>
          
         <SendEmail/> 


        </div>

    </>

  )
}
export default EmailHome