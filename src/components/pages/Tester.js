import React from 'react'
import '../../App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Tester = () => {

    const CustomToast = ({ closeToast }) => {
        return( 
        <div className = "alert alert-dismissible alert-success" >
    
        <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
        <strong>Well done!</strong> You successfully read  <i className="fa-duotone fa-face-smile-hearts"/><a  class= "alert-link" > this important alert message
        </a>
        <i className="fa-duotone fa-face-smile-hearts"></i>

        </div>
      )
    }

    const showToastMessage = () => {
        console.log("TOAST")
        toast.success(<CustomToast/>, {
            position: toast.POSITION.TOP_RIGHT
        });
    };
    const showToastMessage2 = () => {
        console.log("TOAST2")
        toast.success('Success Notification !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    return (
   
        <div>
       
        <ToastContainer />
        <button onClick={showToastMessage}>Notify</button>
        <button onClick={showToastMessage2}>Notify2</button>
    </div>
    )
}

export default Tester