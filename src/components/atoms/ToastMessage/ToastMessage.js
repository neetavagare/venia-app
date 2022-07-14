import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ToastMessage(props) {
    return <ToastContainer autoClose={props.time} role={"alert"} />
}

export default ToastMessage;