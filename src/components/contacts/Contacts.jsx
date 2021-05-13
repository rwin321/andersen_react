import React, { useState } from "react";
import Form from "./Form";

const Contacts = () => {
  console.log("CONTACTS was rendered");
  return (
    <div className="contacts">
      <h2 className="contacts__title">Feel free to contact us!</h2>
      <Form />
    </div>
  );
};

export default Contacts;
