import * as React from "react";

const Avatar = ({ src, alt }) => {
  return (
    <img
      className="w-10 h-10 rounded-full left-4"
      src={src || "https://static.vecteezy.com/system/resources/previews/026/966/960/non_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg"} // Default avatar
      alt={alt || "Avatar"}
    />
  );
};

export default Avatar;
