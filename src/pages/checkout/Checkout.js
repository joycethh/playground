import React, { useState } from "react";
import Input from "../../components/input/Input";
const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    streetAddress: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section>
      <container>
        <h6>Billing Information</h6>
        <form>
          <Input
            name="name"
            type="text"
            placeHolder="Name"
            autoFocus
            required
            handleChange={handleChange}
          />
          <Input
            name="email"
            type="text"
            placeHolder="Email"
            required
            handleChange={handleChange}
          />
          <Input
            name="phone"
            type="text"
            placeHolder="Phone Number"
            required
            handleChange={handleChange}
          />
          <Input
            name="streetAddress"
            type="text"
            placeHolder="Street Address"
            required
            handleChange={handleChange}
          />
          <Input
            name="city"
            type="text"
            placeHolder="City"
            required
            handleChange={handleChange}
          />
          <Input
            name="postalCode"
            type="text"
            placeHolder="Potal Code"
            required
            handleChange={handleChange}
          />
          <Input
            name="country"
            type="text"
            placeHolder="Country"
            required
            handleChange={handleChange}
          />
        </form>
      </container>
    </section>
  );
};

export default Checkout;
