import React, { useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import "./email.scss";

const Email = () => {
  const [email, setEmail] = useState("");

  const url = process.env.REACT_APP_MAILCHIMP_URL;

  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <div className="subscription">
          <h3>Subscribe</h3>
          {/* <form onSubmit={() => subscribe(email)}> */}
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
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  subscribe(email);
                }
              }}
            />
            <span className="icon" onClick={() => subscribe(email)}>
              <HiOutlineArrowRight />
            </span>
          </div>
          {/* </form> */}

          {status === "sending" && (
            <div style={{ color: "#3A69BD" }}>sending...</div>
          )}
          {status === "error" && (
            <div
              style={{ color: "#BD3F3A" }}
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
          {status === "success" && (
            <div style={{ color: "#36BC9B" }}>Subscribed !</div>
          )}
        </div>
      )}
    />
  );
};

export default Email;
