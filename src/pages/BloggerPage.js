// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./BloggerPage.css";

// const BloggerProfile = () => {
//   const [bloggers, setBloggers] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     bio: "",
//     email: "",
//     imageUrl: "", // ✅ add imageUrl field
//   });

//   useEffect(() => {
//     fetchBloggers();
//   }, []);

//   const fetchBloggers = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/bloggers");
//       setBloggers(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/api/bloggers", formData);
//       await fetchBloggers();
//       setShowForm(false);
//       setFormData({ name: "", bio: "", email: "", imageUrl: "" }); // ✅ reset imageUrl too
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="blogger-profile-container">
//       <button onClick={() => setShowForm(!showForm)}>
//         {showForm ? "Close Form" : "Add Blogger"}
//       </button>

//       {showForm && (
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Name"
//             value={formData.name}
//             onChange={(e) =>
//               setFormData({ ...formData, name: e.target.value })
//             }
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//             required
//           />
//           <input
//             type="text"
//             placeholder="Image URL"
//             value={formData.imageUrl}
//             onChange={(e) =>
//               setFormData({ ...formData, imageUrl: e.target.value })
//             }
//             required
//           />
//           <textarea
//             placeholder="Bio"
//             value={formData.bio}
//             onChange={(e) =>
//               setFormData({ ...formData, bio: e.target.value })
//             }
//             required
//           />
//           <button type="submit">Submit</button>
//         </form>
//       )}

//       <div className="blogger-list">
//         {bloggers.map((blogger) => (
//           <div key={blogger._id} className="blogger-card">
//             {blogger.imageUrl && (
//               <img
//                 src={blogger.imageUrl}
//                 alt={blogger.name}
//                 className="blogger-image"
//               />
//             )}
//             <h3>{blogger.name}</h3>
//             <p>{blogger.email}</p>
//             <p>{blogger.bio}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BloggerProfile;


import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BloggerPage.css";

const BloggerProfile = () => {
  const [bloggers, setBloggers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    email: "",
    imageUrl: "",
  });

  useEffect(() => {
    fetchBloggers();
  }, []);

  const fetchBloggers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/bloggers");
      setBloggers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/bloggers", formData);
      await fetchBloggers();
      setShowForm(false);
      setFormData({ name: "", bio: "", email: "", imageUrl: "" });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="blogger-profile-container">
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Close Form" : "Add Blog"}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={formData.imageUrl}
            onChange={(e) =>
              setFormData({ ...formData, imageUrl: e.target.value })
            }
            required
          />
          <textarea
            placeholder="Bio"
            value={formData.bio}
            onChange={(e) =>
              setFormData({ ...formData, bio: e.target.value })
            }
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}

      <div className="blogger-list">
        {bloggers.map((blogger) => (
          <div key={blogger._id} className="blogger-card">
            {blogger.imageUrl && (
              <img
                src={blogger.imageUrl}
                alt={blogger.name}
                className="blogger-image"
              />
            )}
            <h3>{blogger.name}</h3>
            <p>{blogger.email}</p>
            <p>{blogger.bio}</p>
          </div>
        ))}
      </div>

      {/* ✅ About Mangalore Blogger Section */}
      <section className="about-mangalore-blogger">
        <h2>About Mangalore Blogger</h2>
        <p>
          Mangalore bloggers are passionate storytellers who explore the coastal city's rich heritage, cuisine, landscapes, and festivals. They capture Mangalore’s charm through vivid photos, personal narratives, and cultural insights. These bloggers offer authentic experiences, whether it's exploring the bustling markets, historic churches, serene beaches, or traditional Tulu customs. Their goal is to bridge local traditions with global audiences, making Mangalore a must-visit destination. Through their lens, you get a glimpse into a vibrant coastal lifestyle that blends modernity with tradition.
        </p>
      </section>

      {/* ✅ Gallery Section */}
      <section className="blogger-gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOEnCDZUe-fp0s2LOgywuC6_vrE6WVQJxxiQ&s" alt="Mangalore Beach" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbB-Y8BECOQqJ8tI3VHxTfOX-Y8MIVbZqd3A&s" alt="Mangalore Temple" />
          <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2019/05/Cover-for-Romantic-places-in-Mangalore.jpg" alt="Mangalore Street" />
          <img src="https://www.savaari.com/blog/wp-content/uploads/2024/11/Mangalore.webp" alt="Mangalore Food" />
        </div>
      </section>

      {/* ✅ Footer Section */}
      <footer className="blogger-footer">
        <p>&copy; {new Date().getFullYear()} Mangalore Tourism Bloggers. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BloggerProfile;
