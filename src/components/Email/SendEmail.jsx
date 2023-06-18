import React from "react";
import "../../assets/css/sendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../control/mailSlice";
import { collection, addDoc, serverTimestamp,  } from 'firebase/firestore';
import { db } from "../../firebase/EmailFireBase";



const SendEmail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  
  const onSubmit = async (formData) => {
    console.log(formData);
    try {
      const docRef = await addDoc(collection(db, "emails"), {
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
        timestamp: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    dispatch(closeSendMessage());
  };

  const handleError = (errors) => {};

  const registerOptions = {
    to: { required: "To is required" },
    subject: { required: "Subject is required" },
    message:{required:"Message is required"},
  };


  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3 className="new_message">New Message</h3>
        <CloseIcon onClick={()=> dispatch(closeSendMessage())} className="sendMail_close" />
      </div>

      <form onSubmit={handleSubmit(onSubmit,handleError)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          {...register('to',registerOptions.to)}
        />
        <p className="sendMail__error">
          {errors?.to && errors.to.message}
        </p>

        <input
          name="subject"
          placeholder="Subject"
          type="text"
          {...register("subject",registerOptions.subject)}
        />

        <p className="sendMail__error">
          {errors?.subject &&  errors.subject.message}
        </p>
        <input
          name="message"
          placeholder="Message..."
          type="text"
          className="sendMail_message"
          {...register("message",registerOptions.message)}
        />
        <p className="sendMail__error">
          {errors?.message && errors.message.message}
        </p>

        <div className="sendMail_options">
          <Button
            className="sendMail_send"
            variant="contained"
            color="primary"
            type="submit"
     
       
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SendEmail;
