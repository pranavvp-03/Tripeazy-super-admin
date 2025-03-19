import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { HiDotsVertical } from "react-icons/hi"; 
import { FaHeart } from "react-icons/fa"; 
import { useNavigate } from "react-router-dom";

function AdminBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [menuOpen, setMenuOpen] = useState(null);
  const menuRef = useRef(null); // Reference for menu clicks
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/blogs/fetch-blogs")
      .then((response) => setBlogs(response.data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Blog List</h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div 
            key={blog._id} 
           onClick={() => navigate(`/blogs/${blog._id}`)} // Navigate to details page
        className="cursor-pointer border p-4 shadow-md rounded-lg bg-white transition-transform hover:scale-105 hover:shadow-xl relative"
          >
            {/* Thumbnail */}
            <img
              src={blog.thumbnail || "https://via.placeholder.com/150"}
              alt={blog.title || "No title available"}
              className="w-full h-36 object-cover rounded-md"
            />

            {/* Title & 3-dot Menu */}
            <div className="flex justify-between items-center mt-2">
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                {blog.title || "No title available"}
              </h3>
              
              {/* 3-Dot Menu */}
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setMenuOpen(menuOpen === blog._id ? null : blog._id)}
                  className="text-gray-600 hover:text-black focus:outline-none"
                >
                  <HiDotsVertical className="w-5 h-5" />
                </button>

                {/* Dropdown Menu */}
                {menuOpen === blog._id && (
                  <div className="absolute right-0 mt-2 w-28 bg-white shadow-md rounded-lg z-10">
                    <button className="w-full text-left px-3 py-2 hover:bg-gray-100 text-sm text-gray-700">✏ Edit</button>
                    <button className="w-full text-left px-3 py-2 hover:bg-red-100 text-sm text-red-600">🗑 Delete</button>
                  </div>
                )}
              </div>
            </div>

            {/* Category & Location */}
            <p className="text-sm text-gray-500"> 📍 {blog.location || "Unknown"}</p>

            {/* Shortened Content with Proper Handling */}
            <p className="text-gray-600 mt-2 text-sm line-clamp-2">
              {blog.content?.[0]?.blocks?.[1]?.data?.text 
                ? blog.content[0].blocks[1].data.text.substring(0, 50) + "..."
                : "No content available"}
            </p>

            {/* Author & Date */}
            <div className="text-sm text-gray-500 mt-2">
              <span>📝 {blog.author?.email || "Unknown Author"}</span> |{" "}
              {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : "Unknown Date"}
            </div>

            {/* Likes & Saves */}
            <div className="flex justify-between text-gray-600 mt-2 text-sm">
              <div className="flex items-center space-x-1">
                <FaHeart className="w-5 h-5 text-red-500" /> 
                <span>{blog.likes || 0} Likes</span>
              </div>
              <span>🔖 {blog.savedBy?.length || 0} Saves</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminBlogs;
