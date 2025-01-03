import React from 'react';
import { toast } from "react-toastify";

const RejectTost = () => {
  const showErrorToast = () => {
    toast.error("Item has been deleted.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <button 
        onClick={showErrorToast} 
        className="bg-red-500 text-white p-2 rounded-lg"
      >
        Show Error Toast
      </button>
    </div>
  );
};

export default RejectTost;
