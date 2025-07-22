import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Custom styles for toast notifications
const toastStyle = {
  fontSize: '14px',
  width: '300px',
  height: '50px',
};

export const toastError = (message: string) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: toastStyle,
  });
};

export const toastSuccess = (message: string) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: toastStyle,
  });
};

