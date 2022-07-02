import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ToastMessage(props) {
    return <ToastContainer autoClose={props.time} />
}

export default ToastMessage;