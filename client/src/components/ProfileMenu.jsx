import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/authAction";
import Button from "./ui/Button";
import  DropdownMenu  from "./ui/dropdown-menu"

const ProfileDropdown = () => {
  const dispatch = useDispatch();
  
  // Get user details from Redux
  const user = useSelector((state) => state.auth.user); 

  useEffect(() => {
    if (user) {
      localStorage.setItem("userData", JSON.stringify(user));
    }
  }, [user]);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    localStorage.removeItem("permissions");
    localStorage.removeItem("userData");
    window.location.href = "/";
  };

  return (
    <DropdownMenu user={user}>
      {user ? (
        <>
          <p className="px-4 py-2"><strong>Name:</strong> {user.name}</p>
          <p className="px-4 py-2"><strong>Email:</strong> {user.email}</p>
          <hr />
          <Button onClick={handleLogout} className="w-full mt-2 bg-red-500">
            Logout
          </Button>
        </>
      ) : (
        <p className="px-4 py-2 text-gray-500">Not logged in</p>
      )}
    </DropdownMenu>
  );
};

export default ProfileDropdown;
