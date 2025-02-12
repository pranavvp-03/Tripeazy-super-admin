import { useState } from "react";

const ViewProfile = () => {
  const [username, setUsername] = useState("");

  return (
    <div>
   <div className="relative my-4 border-b-2 focus-within:border-blue-500 w-6/12 mx-auto">
  <input
    type="text"
    name="username"
    id="username"
    value=""
    onChange={(e) => setUsername(e.target.value)}
    placeholder=" "
    className="block w-full appearance-none focus:outline-none bg-transparent peer"
  />
  <label
    htmlFor="username"
    className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 ease-in-out"
  >
    Username
  </label>
</div>


    </div>
  );
};

export default ViewProfile;
