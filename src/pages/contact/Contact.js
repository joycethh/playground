import React from "react";
import Badge from "../../components/badge/Badge";
import CommonBanner from "../../components/ui/CommonBanner";
import ContactForm from "./ContactForm";
import banner from "../../assets/banner-contact.jpg";
import "./contact.scss";

const Contact = () => {
  return (
    <Badge title="Contact Us">
      <CommonBanner imageUrl={banner} title="Contact us" />
      <section>
        <div className="flex-container pt-3">
          <div className="left mb-3">
            <h2>Hours of Operation</h2>
            <article>
              <span>Monday – Friday:</span> 8:00AM – 5:00PM EST
            </article>
            <article>
              <span>Saturday:</span> 9:00AM – 5:00PM EST
            </article>
          </div>
          <div className="right mb-3">
            <h2>Contact us</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </Badge>
  );
};

export default Contact;
