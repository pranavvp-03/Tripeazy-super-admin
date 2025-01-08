import React from 'react';
import { toast } from "react-toastify";

const SuccessTost = () => {
  const showToast = () => {
    toast.success("Item moved successfully.", {
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
      <button onClick={showToast} className="bg-green-500 text-white p-2 rounded-lg">
        Show Success Toast
      </button>
    </div>
  );
};

export default SuccessTost;
