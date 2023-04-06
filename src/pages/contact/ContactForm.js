import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Input from "../../components/input/Input";
import { Button } from "../../components/button/Button";

const ContactForm = () => {
  const form = useRef();
  const [error, setError] = useState(null);
  const [sucess, setSucess] = useState(null);

  const id = process.env.REACT_APP_TEMPLATE_ID;
  console.log("id", id);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setSucess(JSON.stringify(result.text));
        },
        (error) => {
          console.log(error.text);
          setError(JSON.stringify(error.text));
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label>Name:</label>
          <Input type="text" name="name" />
        </div>
        <div>
          <label>Email:</label>
          <Input type="email" name="email" />
        </div>
        <div>
          <label>Message:</label>
          <Input name="message" />
        </div>
        <Button name="Send" handleClick={sendEmail} className="full-width" />
      </form>
      <div>
        {sucess && (
          <div>
            Thanks for the message! We will get back to you within 48 hours!
          </div>
        )}
        {error && <div>Something went wrong, please try again!</div>}
      </div>
    </>
  );
};

export default ContactForm;
