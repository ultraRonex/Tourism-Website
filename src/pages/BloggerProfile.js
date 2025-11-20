// import React, { useEffect, useState } from "react";
// import "./BloggerProfile.css";

// const BloggerProfile = () => {
//   const [bloggers, setBloggers] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({ name: "", email: "", bio: "" });
//   const [error, setError] = useState("");

//   const fetchBloggers = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/bloggers");
//       const data = await res.json();
//       setBloggers(data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchBloggers();
//   }, []);

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.name || !formData.email || !formData.bio) {
//       setError("Please fill in all fields.");
//       return;
//     }

//     try {
//       const res = await fetch("http://localhost:5000/api/bloggers", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (!res.ok) throw new Error("Failed to add blogger");

//       const newBlogger = await res.json();
//       setBloggers([...bloggers, newBlogger]);
//       setFormData({ name: "", email: "", bio: "" });
//       setShowForm(false);
//       setError("");
//     } catch (err) {
//       console.error(err);
//       setError("Something went wrong. Try again.");
//     }
//   };

//   return (
//     <div className="blogger-profile">
//       <h1>Blogger Profiles</h1>
//       <button onClick={() => setShowForm(true)} className="add-btn">
//         ➕ Add Blogger
//       </button>

//       {showForm && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>Add Blogger</h2>
//             {error && <p className="error">{error}</p>}
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//               />
//               <textarea
//                 name="bio"
//                 placeholder="Bio"
//                 value={formData.bio}
//                 onChange={handleInputChange}
//               />
//               <div className="btn-group">
//                 <button type="submit">Submit</button>
//                 <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       <ul className="blogger-list">
//         {bloggers.map((blogger) => (
//           <li key={blogger._id}>
//             <h3>{blogger.name}</h3>
//             <p><strong>Email:</strong> {blogger.email}</p>
//             <p><strong>Bio:</strong> {blogger.bio}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BloggerProfile;
