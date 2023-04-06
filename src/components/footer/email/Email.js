import React, { useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import "./email.scss";

const Email = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const url = "";

  // console.log("email in footer", email);
  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <div className="subscription">
          <h3>Subscribe for new arrivals:</h3>
          <form onSubmit={(email) => subscribe(email)}>
            <div className="subscriptInputWrapper">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                required
                placeholder="Enter email to subscribe"
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
