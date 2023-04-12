import React, { useEffect } from 'react';
import EmailHeader from "../../components/Email/EmailHeader"
import EmailSideBar from '../../components/Email/EmailSideBar';
import EmailList from '../EmailList/EmailList';
import "../../assets/css/emailHome.css";
import SendEmail from '../../components/Email/SendEmail';
import { useDispatch, useSelector } from "react-redux";
import EmailLogin from '../EmailLogin/EmailLogin';
import { login } from '../../control/userSlice';
import { auth } from '../../firebase/EmailFireBase';
const EmailHome = () => {

  const {sendMessageIsOpen} =useSelector((store)=>store.mail);
  const {user} = useSelector((store)=>store.user);
  const dispatch = useDispatch();

  useEffect(()=> {
    auth.onAuthStateChanged(user => {
      if(user) {
        // the user is logged in
        dispatch(login({
          displayName:user.displayName,
            email:user.email,
          photoUrl:user.photoURL
        }))
      }
    })
  },[])

  return (
    <>  
        {!user ? (
          <EmailLogin/>
        ):(
          <div className='email--Home'>
          <EmailHeader/> 
          <div className="email_Side">
          <EmailSideBar/>
          <EmailList/>
          </div>
          {sendMessageIsOpen && <SendEmail/>} 
         </div>
        )}
    </>

  )
}
export default EmailHome