


// import React from "react";
// import { useParams } from "react-router-dom";

// const BlogDetail = ({ blogs }) => {
//   const { id } = useParams();
//   const blog = blogs.find((b) => b.id === parseInt(id));

//   if (!blog) return <h2>Blog not found!</h2>;

//   return (
//     <div className="blog-detail-page">
//       <h1>{blog.title}</h1>
//       <h3>by {blog.Author}</h3>
//       <p>{blog.content}</p>
//     </div>
//   );
// };

// export default BlogDetail;


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id: blogId } = useParams();  // Get blogId from URL

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('/api/blogs');
      const data = await response.json();
      setBlogs(data);
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  // Check if blogs is loaded and if the blog exists
  if (loading) {
    return <div>Loading...</div>;
  }

  const blog = blogs.find(b => b.id === blogId);
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <p>{blog.author}</p>
      {/* other blog details */}
    </div>
  );
};

export default BlogDetail;
