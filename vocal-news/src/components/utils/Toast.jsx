import {toast} from "react-toastify";

export function error(message){
    toast.error(message, {
        position: toast.POSITION.TOP_RIGHT
    });
}