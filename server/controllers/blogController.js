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


exports.fetchBlogDetails = async (req, res) => {
  try {
    const blogId = req.params.blogId;

    // Fetch blog data and populate author (Agency)
    const blogData = await Blog.findById(blogId).populate("author", "companyName email");

    if (!blogData) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // Format createdAt date
    const formattedBlog = {
      ...blogData._doc,
      author: blogData.author?.companyName || "Unknown Agency", // Show agency name
      createdAtFormatted: blogData.createdAt
        ? new Date(blogData.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        : "Unknown Date",
    };

    console.log(formattedBlog, "blogData"); // Debugging log
    res.status(200).json(formattedBlog);
  } catch (error) {
    console.error("Error fetching blog details:", error);
    res.status(500).json({ message: "Failed to fetch blog details", error });
  }
};



exports.updateBlog = async (req, res) =>{
    try {
      const {blogId} = req.params;
      const {title,content,category,location,thumbnail,authorId} = req.body;

      const blog = await Blog.findById(blogId);
      if(!blog){
        return res.status(404).json({message:"Blog not found"});
      }

      blog.title = title || blog.title;
      blog.content = content || blog.content;
      blog.category = category || blog.category;
      blog.location = location || blog.location;
      blog.thumbnail = thumbnail || blog.thumbnail;
      blog.author = authorId || blog.author;

      await blog.save();
      res.status(200).json({message:"Blog updated successfully",blog});
    } catch (error) {
      console.error("Error updating blog:", error);
      res.status(500).json({ message: "Internal server error" });
      
    }
}
