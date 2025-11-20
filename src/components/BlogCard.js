import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ id, title, description, Author, image }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="blog-card">
      <img src={image} alt={title} className="blog-card-img" />
      <h4>{title}</h4>
      <h5>by {Author}</h5>
      <p>{description}</p>
      <button className="read-more-btn" onClick={handleReadMore}>
        Read More
      </button>
    </div>
  );
};

export default BlogCard;
