import React from 'react'
import '../../App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Tester = () => {
    const showToastMessage = () => {
        console.log("TOAST")
        toast.success('Success Notification !', {
            position: toast.POSITION.BOTTOM_LEFT
        });
    };

    return (
   
        <div>
        <button onClick={showToastMessage}>Notify</button>
        <ToastContainer />
        <button onClick={showToastMessage}>Notify2</button>
    </div>
    )
}

export default Tester