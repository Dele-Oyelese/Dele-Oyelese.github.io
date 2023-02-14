import React from 'react';
import '../css/ContactForm.css';

function ContactForm() {
  return (
    <div className="contact-info">
      <h1>Contact Me</h1>
      <p>If you have any questions or would like to get in touch, please fill out the form below.</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ContactForm;
