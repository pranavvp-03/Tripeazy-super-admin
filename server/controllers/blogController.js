const Blog = require("../model/Agency/Blog");

exports.fetchblogs = async (req, res) => {
  try {
    const blogs = await Blog.find()
      .populate("author", "agencyName email") // Get agency name & email
      .sort({ createdAt: -1 });

    const formattedBlogs = blogs.map((blog) => ({
      ...blog._doc,
      createdAtFormatted: new Date(blog.createdAt).toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    }));

    res.status(200).json(formattedBlogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ message: "Failed to fetch blogs", error });
  }
};
