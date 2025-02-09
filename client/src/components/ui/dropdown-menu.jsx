import { useState } from "react";
import Avatar from './avatar'

const DropdownMenu = ({ children, user }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Avatar Clickable */}
      <Avatar
        src={user?.avatar} 
        alt={user?.name} 
        onClick={() => setOpen(!open)} 
      />

      {/* Dropdown Content */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg p-2">
          {children}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
