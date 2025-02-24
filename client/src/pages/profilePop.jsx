import { useEffect, useState } from "react";

const ProfileModal = ({isOpens}) => {

  const [isOpen, setIsOpen] = useState(false);

useEffect(()=>{
  setIsOpen(isOpens)

}),[isOpen]
  
  return (
    <div>
      {/* Button to Open the Modal */}
      {/* <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-full"
      >
        View Profile
      </button> */}

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50"
          onClick={() => setIsOpen(false)} // Close modal when clicking outside
        >
          <div
            className="max-w-sm bg-white shadow-xl rounded-lg text-gray-900 relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 bg-gray-300 rounded-full px-2 py-1 text-gray-600 hover:bg-gray-400"
            >
              &times;
            </button>

            {/* Cover Image */}
            <div className="rounded-t-lg h-32 overflow-hidden">
              <img
                className="object-cover object-top w-full"
                src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt="Mountain"
              />
            </div>

            {/* Profile Picture */}
            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
              <img
                className="object-cover object-center h-32"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt="Woman looking front"
              />
            </div>

            {/* Profile Info */}
            <div className="text-center mt-2">
              <h2 className="font-semibold">Sarah Smith</h2>
              <p className="text-gray-500">Freelance Web Designer</p>
            </div>

            {/* Stats */}
            <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
              <li className="flex flex-col items-center">
                <svg
                  className="w-4 fill-current text-blue-900"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <div>2k</div>
              </li>
              <li className="flex flex-col items-center">
                <svg
                  className="w-4 fill-current text-blue-900"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9z" />
                </svg>
                <div>10k</div>
              </li>
              <li className="flex flex-col items-center">
                <svg
                  className="w-4 fill-current text-blue-900"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                </svg>
                <div>15</div>
              </li>
            </ul>

            {/* Follow Button */}
            <div className="p-4 border-t mx-8 mt-2">
              <button className="w-full rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
                Follow
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileModal;
