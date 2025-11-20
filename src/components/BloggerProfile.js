import React from "react";
import "./BloggerProfile.css"; // Importing the CSS file for styling

const BloggerProfile = ({ name, bio, imageUrl }) => {
  return (
    <div className="blogger-profile-card">
      <img src={imageUrl} alt={name} className="blogger-profile-img" />
      <div className="blogger-profile-info">
        <h4 className="blogger-name">{name}</h4>
        <p className="blogger-bio">{bio}</p>
      </div>
    </div>
  );
};

export default BloggerProfile;
