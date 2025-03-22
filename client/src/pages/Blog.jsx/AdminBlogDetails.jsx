import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux"; // Import Redux selector
import toast from "react-hot-toast";

function AdminBlogDetails() {
  const { blogId } = useParams(); // Get Blog ID from URL
  const navigate = useNavigate(); // For redirecting after deletion
  const [blog, setBlog] = useState(null);
  const [editableBlog, setEditableBlog] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Get permissions from Redux
  const permissions = useSelector((state) => state.auth.permissions);
  const hasEditPermission = permissions?.Blogs?.includes("Edit");
  const hasDeletePermission = permissions?.Blogs?.includes("Delete");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/blogs/${blogId}`)
      .then((response) => {
        setBlog(response.data);
        setEditableBlog(response.data); // Create a copy for editing
      })
      .catch((error) => console.error("Error fetching blog details:", error));
  }, [blogId]);

  if (!blog) return <p className="text-center text-gray-600">Loading...</p>;

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableBlog((prev) => ({ ...prev, [name]: value }));
    setIsEditing(true);
  };

  // Handle removing images
  const handleRemoveImage = (index) => {
    setEditableBlog((prev) => ({
      ...prev,
      content: prev.content.map((section) => ({
        ...section,
        blocks: section.blocks.filter((_, idx) => idx !== index),
      })),
    }));
    setIsEditing(true);
  };

  // Handle saving changes
  const handleSave = () => {
    axios
      .put(`http://localhost:3001/api/blogs/${blogId}`, editableBlog)
      .then((response) => {
        setBlog(response.data);
        setIsEditing(false);
        toast.success("Blog updated successfully!");
      })
      .catch((error) => console.error("Error saving blog:", error));
  };

  // Handle canceling edits
  const handleCancel = () => {
    setEditableBlog(blog); // Reset changes
    setIsEditing(false);
  };

  // Handle deleting blog
  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if (!confirmDelete) return;

    axios
      .delete(`http://localhost:3001/api/blogs/${blogId}`)
      .then(() => {
        alert("Blog deleted successfully.");
        navigate("/admin/blogs"); // Redirect to blogs list after deletion
      })
      .catch((error) => console.error("Error deleting blog:", error));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Blog Title */}
      {hasEditPermission ? (
        <input
          type="text"
          name="title"
          value={editableBlog.title}
          onChange={handleChange}
          className="text-2xl font-bold w-full border-b border-gray-300 focus:outline-none"
        />
      ) : (
        <h2 className="text-2xl font-bold">{blog.title}</h2>
      )}

      {/* Location & Author */}
      <p className="text-sm text-gray-500">📍 {editableBlog.location || "Unknown"}</p>
      <p className="text-sm text-gray-700">
        🏢 <strong>Agency:</strong> {typeof blog.author === "string" ? blog.author : blog.author?.agencyName || "Unknown Agency"}
      </p>

      {/* Thumbnail */}
      <img
        src={editableBlog.thumbnail || "https://via.placeholder.com/300"}
        alt={editableBlog.title}
        className="w-full h-64 object-cover mt-4 rounded-md"
      />

      {/* Blog Content (Images & Text) */}
      <div className="mt-4 text-gray-800">
        {editableBlog.content?.map((section, index) => (
          <div key={index} className="mb-4">
            {section.blocks?.map((block, idx) => {
              if (block.type === "image") {
                return (
                  <div key={idx} className="relative inline-block">
                    <img
                      src={block.data?.file?.url}
                      alt={block.data?.caption || "Image"}
                      className="w-full h-auto rounded-md"
                    />
                    {hasEditPermission && (
                      <button
                        onClick={() => handleRemoveImage(idx)}
                        className="absolute top-2 right-2 bg-red-500 text-white text-xs p-1 rounded-full"
                      >
                        ❌
                      </button>
                    )}
                  </div>
                );
              }
              if (block.type === "paragraph") {
                return hasEditPermission ? (
                  <textarea
                    key={idx}
                    name="text"
                    value={block.data?.text}
                    onChange={(e) => {
                      const newText = e.target.value;
                      setEditableBlog((prev) => ({
                        ...prev,
                        content: prev.content.map((sec, secIdx) =>
                          secIdx === index
                            ? {
                                ...sec,
                                blocks: sec.blocks.map((blk, blkIdx) =>
                                  blkIdx === idx ? { ...blk, data: { ...blk.data, text: newText } } : blk
                                ),
                              }
                            : sec
                        ),
                      }));
                      setIsEditing(true);
                    }}
                    className="w-full border p-2 rounded-md"
                  />
                ) : (
                  <p key={idx} className="mb-2">{block.data?.text}</p>
                );
              }
              return null;
            })}
          </div>
        ))}
      </div>

      {/* Likes & Saves */}
      <div className="flex justify-between items-center mt-4 text-gray-700">
        <p>👍 {blog.likes} Likes</p>
        <p>🔖 {blog.savedBy?.length} Saves</p>
      </div>

      {/* Save & Cancel Buttons */}
      {isEditing && hasEditPermission && (
        <div className="flex gap-4 mt-4">
          <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Save Changes
          </button>
          <button onClick={handleCancel} className="bg-gray-500 text-white px-4 py-2 rounded-md">
            Cancel
          </button>
        </div>
      )}

      {/* Delete Blog Button */}
      {hasDeletePermission && (
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded-md mt-4 w-full"
        >
          Delete Blog
        </button>
      )}
    </div>
  );
}

export default AdminBlogDetails;
