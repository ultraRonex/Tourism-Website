// src/pages/BlogDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./BlogDetail.css"; // Create this CSS file or add styles as needed

// Dummy data (same as the one used in VisitorPage)
const blogData = [
  {
    id: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbf_-tAKhDEJG81sYT1xwBZMy5K6golFEFMQ&s",
    title: "Exploring the Mangalore",
    Author: "John",
    content: "This is the full blog about exploring different treks, villages, and nature in the Himalayas. It covers everything in detail...",
  },
  {
    id: 2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbf_-tAKhDEJG81sYT1xwBZMy5K6golFEFMQ&s",
    title: "Journey through the Mangalore Heritage.",
    Author: "John",
    content: "This is the full blog about the Amazon forests, their importance, adventures, and what to expect when traveling there...",
  },
  {
    id: 3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbf_-tAKhDEJG81sYT1xwBZMy5K6golFEFMQ&s",
    title: "Adventures in Mangalore",
    Author: "John",
    content: "In this blog, I share my experiences traveling across the Sahara desert, the beautiful sunsets, and the magical nights...",
  },
  {
    id: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbf_-tAKhDEJG81sYT1xwBZMy5K6golFEFMQ&s",
    title: "Cultural Tour of Mangalore.",
    Author: "John",
    content: "Mangalore offers a rich cultural tapestry, from art and food to history and modern marvels. This blog shares my best moments...",
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === parseInt(id));

  if (!blog) return <h2>Blog not found!</h2>;

  return (
    <>
      <Navbar />
      <div className="blog-detail-container">
        <h1>{blog.title}</h1>
        <p><em>by {blog.Author}</em></p>
        <img src={blog.image} alt={blog.title} className="blog-detail-img" />
        <p className="blog-content">{blog.content}</p>

        {/* Comment Section (Static) */}
        <div className="comment-section">
          <h3>Comments</h3>
          <div className="comment">
            <p><strong>Alice:</strong> Great blog! Very informative.</p>
          </div>
          <div className="comment">
            <p><strong>Bob:</strong> Loved reading this. Waiting for more!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
