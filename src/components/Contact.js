import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import { 
    ContactContainer,
    ContactHeader,
    ContactUsForm,
    InputField,
    ContactTextArea,
    ContactSubmitButton,
    MessageSentContainer,
 } from "./styled/homepage.styled";

const ContactUs = () => {
    const form = useRef();
    const [showMessageSent, setShowMessageSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_llqpm1i', 'template_uw2s2eq', form.current, 'AiGO8oL6SL_yM2GhI')
          .then((result) => {
              console.log(result.text);
              setShowMessageSent(true);
              form.current.reset();
              setTimeout(() => setShowMessageSent(false), 3000); // hide message sent after 3 seconds
          }, (error) => {
              console.log(error.text);
          });
    };

    return (
      <div id="Contact">
      <ContactContainer>
        <ContactHeader>Contact Us</ContactHeader>
        <ContactUsForm ref={form} onSubmit={sendEmail}>
          <InputField type="text" placeholder="Name" name="user_name" />
          <InputField type="email" placeholder="Email" name="user_email" />
          <InputField type="tel" placeholder="Phone Number" name="phone_number" />
          <ContactTextArea placeholder="Message" name="message"></ContactTextArea>
          <ContactSubmitButton type="submit">Submit</ContactSubmitButton>
          {showMessageSent && <MessageSentContainer>Message sent!</MessageSentContainer>}
        </ContactUsForm>
      </ContactContainer>
      </div>
    );
};

export default ContactUs;