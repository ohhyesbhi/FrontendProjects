import {  toast } from 'react-toastify';


export function showSucess(message){
    toast.success(message,{ position: toast.POSITION.TOP_RIGHT})
}

export function showError(message){
    toast.error(message,{ position: toast.POSITION.TOP_RIGHT})
}