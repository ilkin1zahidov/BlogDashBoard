import React from "react";
import "../../assets/css/sendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";

const SendEmail = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3 className="new_message">New Message</h3>
        <CloseIcon className="sendMail_close" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="text"
          {...register("to value ", {required: true})}
        />
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          {...register("subject value ", {required: true})}
        />
        <input
          name="message"
          placeholder="Message..."
          type="text"
          className="sendMail_message"
          {...register("message value ", {required: true})}
        />

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
