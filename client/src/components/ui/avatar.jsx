import React from "react";

const Avatar = ({ src, alt, onClick }) => {
  return (
    <img
      className="w-10 h-10 rounded-full cursor-pointer"
      src={
        src ||
        "https://static.vecteezy.com/system/resources/previews/026/966/960/non_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg"
      }
      alt={alt || "Avatar"}
      onClick={onClick} // Open dropdown on click
    />
  );
};

export default Avatar;
