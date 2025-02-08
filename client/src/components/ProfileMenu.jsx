import { useState } from "react";
import Avatar from "./ui/avatar";
import DropdownMenu from "./ui/dropdown-menu";
import Button from "./ui/button";

const ProfileMenu = ({ user, handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)}>
        <Avatar src={user?.avatar} alt={user?.name} />
      </button>

      {isOpen && (
        <DropdownMenu>
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg p-2">
            <p className="px-4 py-2">{user?.name}</p>
            <h1>pranav</h1>
            <hr />
            <Button onClick={handleLogout} className="w-full mt-2 bg-red-500">
              Logout
            </Button>
          </div>
        </DropdownMenu>
      )}
    </div>
  );
};

export default ProfileMenu;
