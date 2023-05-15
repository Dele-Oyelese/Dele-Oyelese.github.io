import { useRef,React } from 'react';
import '../css/ContactForm.css';
import 'react-bootstrap';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const form =useRef()
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kcximed', 'template_fkiobg9', form.current, '-A3kGsVEqNXdIw9lR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };


  return (
    
    <form ref ={form} onSubmit = {sendEmail}>
      <fieldset>
        <legend>Contact Me</legend>

        <div class="form-group">
          <label for="exampleInputEmail1" class="form-label mt-4">Subject</label>
          <input type="text" class="form-control" id="subject" name="subject" aria-describedby="contactPhone" placeholder="Enter your subject" />

        </div>

        <div class="form-group">
          <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" name="exampleInputEmail1" aria-describedby="contactEmail" placeholder="Enter email" />
        </div>


        <div class="form-group">
          <label for="contactPhoneNumber" class="form-label mt-4">Phone Number</label>
          <input type="text" class="form-control" id="contactPhoneNumber" name="contactPhoneNumber" aria-describedby="contactPhone" placeholder="Enter your phone number" />
        </div>
 
        <div class="form-group">
          <label for="exampleTextarea" class="form-label mt-4">Nature of Inquiry</label>
          <textarea class="form-control" id="exampleTextarea" name="message" rows="3"></textarea>
        </div>
              <button type="submit" class="btn btn-primary">Submit</button>
    </fieldset>
  </form>
          );
}

          export default ContactForm;
