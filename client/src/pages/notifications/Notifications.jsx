import React, { useEffect, useState } from "react";
import axios from "axios";

function Notification() {
  const [contactRequests, setContactRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(""); // Store selected filter state

  // Fetch notifications with filters
  const fetchContactRequests = async (readFilter = "") => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:3001/api/contact-requests?read=${readFilter}`
      );
      if (response.data.success) {
        setContactRequests(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching contact requests:", error);
      setError("Failed to fetch notifications. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch on component mount
  useEffect(() => {
    fetchContactRequests();
  }, []);

  // Handle filter change
  const handleFilterChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedFilter(selectedValue); // Update state
    fetchContactRequests(selectedValue);
  };

  // Mark a notification as read
  const handleMarkAsRead = async (id) => {
    try {
      await axios.put(`http://localhost:3001/api/contact-requests/${id}/mark-as-read`);
      setContactRequests((prev) =>
        prev.map((request) =>
          request._id === id ? { ...request, read: true } : request
        )
      );
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  if (isLoading) return <p>Loading notifications...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Notifications</h1>

      {/* Filters */}
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="filter">Filter by: </label>
        <select
          id="filter"
          style={{ padding: "5px", borderRadius: "4px", marginRight: "10px" }}
          value={selectedFilter} // This ensures the dropdown updates
          onChange={handleFilterChange}
        >
          <option value="">All</option>
          <option value="false">Unread</option>
          <option value="true">Read</option>
        </select>
      </div>

      {contactRequests.length === 0 ? (
        <p>No new notifications.</p>
      ) : (
        <div>
          {contactRequests.map((request) => (
            <div
              key={request._id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "16px",
                marginBottom: "16px",
                backgroundColor: request.read ? "#f9f9f9" : "#fff",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2 style={{ fontSize: "18px", margin: 0 }}>{request.name}</h2>
                <small style={{ color: "#666" }}>
                  {new Date(request.createdAt).toLocaleDateString()}
                </small>
              </div>
              <p style={{ margin: "8px 0", color: "#333" }}>{request.message}</p>
              <p style={{ margin: "8px 0", color: "#666" }}>Phone: {request.phone}</p>
              {!request.read && (
                <button
                  onClick={() => handleMarkAsRead(request._id)}
                  style={{
                    padding: "8px 16px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Mark as Read
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Notification;
