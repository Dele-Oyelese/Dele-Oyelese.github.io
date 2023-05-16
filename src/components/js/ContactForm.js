import { useRef, React } from 'react';
import '../css/ContactForm.css';
import 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {
  const form = useRef()


  const CustomToast = () => {
    return( 
    <div className = "alert alert-dismissible alert-success" >

    <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
    <strong>Message sent successfully!</strong>  <a class= "alert-link" > I will reply as soon as possible</a>
    </div>
  )
}

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_kcximed', 'template_fkiobg9', form.current, '-A3kGsVEqNXdIw9lR')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  console.log("TOAST")
  toast.success(<CustomToast/>, {
    position: toast.POSITION.TOP_RIGHT
  });


  e.target.reset();
};

const showToastMessage = () => {
  console.log("TOAST")
  toast.success('Success Notification !', {
    position: toast.POSITION.TOP_RIGHT
  });
};

return (

  <form ref={form} onSubmit={sendEmail}>
    <fieldset>
      <legend>Contact Me</legend>

      <div className="form-group">
        <label htmlFor="exampleInputEmail1" className="form-label mt-4">Subject</label>
        <input type="text" className="form-control" id="subject" name="subject" aria-describedby="contactPhone" placeholder="Enter your subject" />

      </div>

      <div className="form-group">
        <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" name="exampleInputEmail1" aria-describedby="contactEmail" placeholder="Enter email" />

      </div>


      <div className="form-group">
        <label htmlFor="contactPhoneNumber" className="form-label mt-4">Phone Number</label>
        <input type="text" className="form-control" id="contactPhoneNumber" name="contactPhoneNumber" aria-describedby="contactPhone" placeholder="Enter your phone number" />
      </div>

      <div className="form-group">
        <label htmlFor="exampleTextarea" className="form-label mt-4">Nature of Inquiry</label>
        <textarea className="form-control" id="exampleTextarea" name="message" rows="3"></textarea>
        <ToastContainer />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>

    </fieldset>

  </form>

);
}

export default ContactForm;
