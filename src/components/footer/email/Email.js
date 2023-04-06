import React, { useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import "./email.scss";

const Email = () => {
  const [email, setEmail] = useState("");

  const url = process.env.REACT_APP_MAILCHIMP_URL;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   jsonp(`${url}&EMAIL=${email}`, { param: 'c' }, (_, data) => {
  //     const { msg, result } = data
  //     // do something with response
  //     alert(msg);
  // });
  // }
  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <div className="subscription">
          <h3>Subscribe</h3>
          <form onSubmit={(email) => subscribe(email)}>
            <div className="subscriptInputWrapper">
              <input
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                value={email}
                required
                placeholder="Enter email to subscribe"
                className="required email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="icon" onClick={(email) => subscribe(email)}>
                <HiOutlineArrowRight />
              </span>
            </div>
          </form>

          {status === "sending" && (
            <div style={{ color: "blue" }}>sending...</div>
          )}
          {status === "error" && (
            <div
              style={{ color: "red" }}
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
          {status === "success" && (
            <div style={{ color: "green" }}>Subscribed !</div>
          )}
        </div>
      )}
    />
  );
};

export default Email;
