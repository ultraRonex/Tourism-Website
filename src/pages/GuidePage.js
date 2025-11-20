// import React, { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
// import "./GuidePage.css";

// const GuideProfile = ({ name, experience, languages, location, contact, imageUrl }) => {
//   return (
//     <div className="guide-profile-card">
//       <img src={imageUrl} alt={name} className="guide-profile-img" />
//       <h4>{name}</h4>
//       <p><strong>Experience:</strong> {experience}</p>
//       <p><strong>Languages Spoken:</strong> {languages}</p>
//       <p><strong>Location:</strong> {location}</p>
//     </div>
//   );
// };

// const ReplyForm = ({ messageId, onReplySent }) => {
//   const [replyText, setReplyText] = useState("");

//   const handleReply = () => {
//     if (replyText.trim()) {
//       fetch(`http://localhost:5000/api/messages/${messageId}/reply`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ reply: replyText }),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           onReplySent(replyText);
//           setReplyText("");
//         })
//         .catch((err) => console.error("Failed to send reply:", err));
//     }
//   };

//   return (
//     <div className="reply-form">
//       <textarea
//         placeholder="Type your reply..."
//         value={replyText}
//         onChange={(e) => setReplyText(e.target.value)}
//       />
//       <button className="submit-guide-btn" onClick={handleReply}>Send Reply</button>
//     </div>
//   );
// };

// const GuidePage = () => {
//   const [guides, setGuides] = useState([]);
//   const [upcomingEvents, setUpcomingEvents] = useState([]);
//   const [showEventForm, setShowEventForm] = useState(false);
//   const [newEvent, setNewEvent] = useState({
//     title: "",
//     date: "",
//     description: "",
//     location: "",
//     imageUrl: "",
//   });
//   const [showForm, setShowForm] = useState(false);
//   const [newGuide, setNewGuide] = useState({
//     name: "",
//     experience: "",
//     languages: "",
//     location: "",
//     contact: "",
//     imageUrl: "",
//   });

//   const [inboxMessages, setInboxMessages] = useState([]);
//   const [messages, setMessages] = useState([]);

//   const guideId = "68183c212d516debed908789"; // Mock guide ID for now

//   useEffect(() => {
//     // Fetch guides
//     fetch("http://localhost:5000/api/guides")
//       .then((res) => res.json())
//       .then((data) => setGuides(data))
//       .catch((err) => console.error("Error fetching guides:", err));
  
//     // // Fetch only inbox messages for the current guide
//     // fetch(`http://localhost:5000/api/messages/inbox/${guideId}`)
//     //   .then((res) => res.json())
//     //   .then((data) => setInboxMessages(data))
//     //   .catch((err) => console.error("Error fetching inbox messages:", err));
  
//     // Fetch upcoming events
//     fetch("http://localhost:5000/api/events")
//       .then((res) => res.json())
//       .then((data) => setUpcomingEvents(data))
//       .catch((err) => console.error("Error fetching events:", err));
    
//     fetch(`http://localhost:5000/api/messages/inbox/${guideId}`)
//     .then((res) => res.json())
//     .then((data) => setInboxMessages(data))
//     .catch((err) => console.error("Error fetching inbox messages:", err));
    
//   }, [guideId]);
  

//   const handleAddGuide = () => {
//     const { name, experience, languages, location, contact, imageUrl } = newGuide;
//     if (name && experience && languages && location && contact && imageUrl) {
//       fetch("http://localhost:5000/api/guides", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newGuide),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           setGuides([...guides, data]);
//           setNewGuide({
//             name: "",
//             experience: "",
//             languages: "",
//             location: "",
//             contact: "",
//             imageUrl: "",
//           });
//           setShowForm(false);
//         })
//         .catch((err) => {
//           console.error("Error adding guide:", err);
//           alert("Failed to add guide. Please try again.");
//         });
//     } else {
//       alert("Please fill all the fields!");
//     }
//   };

//   const handleAddEvent = () => {
//     const { title, date, description, location } = newEvent;
//     if (title && date && description && location) {
//       fetch("http://localhost:5000/api/events", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newEvent),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           setUpcomingEvents([...upcomingEvents, data]);
//           setNewEvent({
//             title: "",
//             date: "",
//             description: "",
//             location: "",
//           });
//           setShowEventForm(false);
//         })
//         .catch((err) => {
//           console.error("Error adding event:", err);
//           alert("Failed to add event. Please try again.");
//         });
//     } else {
//       alert("Please fill all the fields!");
//     }
//   };

//   const handleInputChange = (e) => {
//     setNewGuide({ ...newGuide, [e.target.name]: e.target.value });
//   };

//   const handleEventInputChange = (e) => {
//     setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="guide-page">
//       <Navbar />
//       <div className="about-section">
//         <h2>About Our Mangalore Travel Guides</h2>
//         <p>
//           Our guides are not just experts in history and culture; they are also locals who know Mangalore inside out. From the delicious seafood to the lush green landscapes, our guides are eager to show you the best of what this coastal city has to offer. Whether you're here for a short visit or a long stay, they can tailor the experience to match your interests and preferences. Their insights and storytelling will bring the city to life.
//         </p>
//       </div>

//       <div className="guide-profiles">
//         <h2>Our Travel Guides</h2>
//         <div className="guide-profiles-container">
//           {guides.map((guide, index) => (
//             <GuideProfile key={index} {...guide} />
//           ))}
//         </div>

//         <button className="add-guide-btn" onClick={() => setShowForm(!showForm)}>
//           {showForm ? "Close Form" : "Add New Guide"}
//         </button>

//         {showForm && (
//           <div className="add-guide-form">
//             {["name", "experience", "languages", "location", "contact", "imageUrl"].map((field) => (
//               <input
//                 key={field}
//                 type="text"
//                 name={field}
//                 placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//                 value={newGuide[field]}
//                 onChange={handleInputChange}
//               />
//             ))}
//             <button className="submit-guide-btn" onClick={handleAddGuide}>
//               Submit Guide
//             </button>
//           </div>
//         )}
//       </div>

//       <div className="upcoming-events-section">
//         <h2>Upcoming Events in Mangalore</h2>
//         {upcomingEvents.length === 0 ? (
//           <p>No upcoming events at the moment.</p>
//         ) : (
//           <div className="event-list">
//             {upcomingEvents.map((event) => (
//   <div key={event._id} className="event-card">
//     {event.imageUrl && (
//       <img src={event.imageUrl} alt={event.title} className="event-image" />
//     )}
//     <h3>{event.title}</h3>
//     <p><strong>Date:</strong> {event.date}</p>
//     <p><strong>Location:</strong> {event.location}</p>
//     <p>{event.description}</p>
//   </div>
// ))}

//           </div>
//         )}

//         <button className="add-event-btn" onClick={() => setShowEventForm(!showEventForm)}>
//           {showEventForm ? "Close Event Form" : "Add New Event"}
//         </button>

//         {showEventForm && (
//           <div className="add-event-form">
//             {["title", "date", "description", "location", "imageUrl"].map((field) => (

//               <input
//                 key={field}
//                 type="text"
//                 name={field}
//                 placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//                 value={newEvent[field]}
//                 onChange={handleEventInputChange}
//               />
//             ))}
//             <button className="submit-event-btn" onClick={handleAddEvent}>
//               Submit Event
//             </button>
//           </div>
//         )}
//       </div>

//       <div className="inbox-section">
//   <h2>Visitor Messages</h2>
//   {Object.keys(inboxMessages).length === 0 ? (
//     <p>No messages from visitors yet.</p>
//   ) : (
//     Object.entries(inboxMessages).map(([visitorId, messages]) => (
//       <div key={visitorId} className="visitor-message-thread">
//         <h4>Messages from Visitor: {visitorId}</h4>
//         {messages.map((msg) => (
//           <div key={msg._id} className="message-card">
//             <p><strong>Message:</strong> {msg.message}</p>
//             <p><strong>Sent:</strong> {new Date(msg.timestamp).toLocaleString()}</p>

//             {msg.reply ? (
//               <>
//                 <p><strong>Your Reply:</strong> {msg.reply}</p>
//                 <p><strong>Replied On:</strong> {new Date(msg.replyTimestamp).toLocaleString()}</p>
//               </>
//             ) : (
//               <ReplyForm
//                 messageId={msg._id}
//                 onReplySent={(replyText) => {
//                   // Update the reply in state
//                   setInboxMessages((prev) => {
//                     const updated = { ...prev };
//                     updated[visitorId] = updated[visitorId].map((m) =>
//                       m._id === msg._id ? { ...m, reply: replyText, replyTimestamp: new Date() } : m
//                     );
//                     return updated;
//                   });
//                 }}
//               />
//             )}
//           </div>
//         ))}

        
//       </div>
//     ))
//   )}
// </div>


//       <div className="gallery-section">
//         <h2>Travel Memories Gallery</h2>
//         <div className="gallery-container">
//           {/* Replace with real images if needed */}
//         </div>
//       </div>

//       <footer className="footer">
//         <p>&copy; 2025 Our Travel Guides | All Rights Reserved</p>
//       </footer>
//     </div>
//   );
// };

// export default GuidePage;



import React, { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
import "./GuidePage.css";
import GuideChatBox from "./GuideChatBox";



const GuideProfile = ({ name, experience, languages, location, contact, imageUrl }) => {
  return (
    <div className="guide-profile-card">
      <img src={imageUrl} alt={name} className="guide-profile-img" />
      <h4>{name}</h4>
      <p><strong>Experience:</strong> {experience}</p>
      <p><strong>Languages Spoken:</strong> {languages}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
};

const ReplyForm = ({ messageId, onReplySent }) => {
  const [replyText, setReplyText] = useState("");

  const handleReply = () => {
    if (replyText.trim()) {
      fetch(`http://localhost:5000/api/messages/${messageId}/reply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reply: replyText }),
      })
        .then((res) => res.json())
        .then((data) => {
          onReplySent(replyText);
          setReplyText("");
        })
        .catch((err) => console.error("Failed to send reply:", err));
    }
  };

  return (
    <div className="reply-form">
      <textarea
        placeholder="Type your reply..."
        value={replyText}
        onChange={(e) => setReplyText(e.target.value)}
      />
      <button className="submit-guide-btn" onClick={handleReply}>Send Reply</button>
    </div>
  );
};

const GuidePage = () => {
  const [guides, setGuides] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [showEventForm, setShowEventForm] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    description: "",
    location: "",
    imageUrl: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [newGuide, setNewGuide] = useState({
    name: "",
    experience: "",
    languages: "",
    location: "",
    contact: "",
    imageUrl: "",
  });

  const [inboxMessages, setInboxMessages] = useState({}); // ✅ as object
  // const guideId = "68183be12d516debed908784"; // Mock guide ID

  const visitorId = '68203e8d7a3789718c51b6c6'; // In a real app, pass the visitor who started the chat
  const guideId = '68203ea57a3789718c51b6c9';   // Replace with actual logged-in guide's ID

  useEffect(() => {
    // Fetch guides
    fetch("http://localhost:5000/api/guides")
      .then((res) => res.json())
      .then((data) => setGuides(data))
      .catch((err) => console.error("Error fetching guides:", err));

    // Fetch events
    fetch("http://localhost:5000/api/events")
      .then((res) => res.json())
      .then((data) => setUpcomingEvents(data))
      .catch((err) => console.error("Error fetching events:", err));

    // ✅ Fetch inbox messages
    fetch(`http://localhost:5000/api/messages/inbox/${guideId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch inbox messages");
        return res.json();
      })
      .then((data) => {
        console.log("Fetched inbox:", data);
        setInboxMessages(data);
      })
      .catch((err) => console.error("Error fetching inbox messages:", err));
  }, [guideId]);

  const handleAddGuide = () => {
    const { name, experience, languages, location, contact, imageUrl } = newGuide;
    if (name && experience && languages && location && contact && imageUrl) {
      fetch("http://localhost:5000/api/guides", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newGuide),
      })
        .then((res) => res.json())
        .then((data) => {
          setGuides([...guides, data]);
          setNewGuide({
            name: "",
            experience: "",
            languages: "",
            location: "",
            contact: "",
            imageUrl: "",
          });
          setShowForm(false);
        })
        .catch((err) => {
          console.error("Error adding guide:", err);
          alert("Failed to add guide. Please try again.");
        });
    } else {
      alert("Please fill all the fields!");
    }
  };

  const handleAddEvent = () => {
    const { title, date, description, location } = newEvent;
    if (title && date && description && location) {
      fetch("http://localhost:5000/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      })
        .then((res) => res.json())
        .then((data) => {
          setUpcomingEvents([...upcomingEvents, data]);
          setNewEvent({
            title: "",
            date: "",
            description: "",
            location: "",
            imageUrl: "",
          });
          setShowEventForm(false);
        })
        .catch((err) => {
          console.error("Error adding event:", err);
          alert("Failed to add event. Please try again.");
        });
    } else {
      alert("Please fill all the fields!");
    }
  };

  const handleInputChange = (e) => {
    setNewGuide({ ...newGuide, [e.target.name]: e.target.value });
  };

  const handleEventInputChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  return (
    <div className="guide-page">
      {/* <Navbar /> */}

      <div>
      {/* Other sections like profile, places managed, etc. */}

      {/* Chatbox Section */}
      <div style={{ marginTop: '30px' }}>
        <GuideChatBox visitorId={visitorId} guideId={guideId} />
      </div>
    </div>

      <div className="about-section">
        <h2>About Our Mangalore Travel Guides</h2>
        <p>
        Mangalore, a coastal gem in Karnataka, offers a blend of rich culture, history, and natural beauty. Travelers can explore pristine beaches like Panambur and Tannirbhavi, visit historic temples such as Kadri Manjunath and Mangaladevi, and hike through the lush Western Ghats. The city also offers water sports, adventure activities like trekking, and vibrant festivals. With its diverse cuisine, including seafood and traditional dishes, Mangalore provides a unique cultural experience, making it a must-visit destination for travelers
          Our guides are not just experts in history and culture; they are also locals who know Mangalore inside out. From the delicious seafood to the lush green landscapes, our guides are eager to show you the best of what this coastal city has to offer.
        </p>
      </div>

      <div className="guide-profiles">
        <h2>Our Travel Guides</h2>
        <div className="guide-profiles-container">
          {guides.map((guide, index) => (
            <GuideProfile key={index} {...guide} />
          ))}
        </div>

        <button className="add-guide-btn" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Close Form" : "Add New Guide"}
        </button>

        {showForm && (
          <div className="add-guide-form">
            {["name", "experience", "languages", "location", "contact", "imageUrl"].map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={newGuide[field]}
                onChange={handleInputChange}
              />
            ))}
            <button className="submit-guide-btn" onClick={handleAddGuide}>
              Submit Guide
            </button>
          </div>
        )}
      </div>

      <div className="upcoming-events-section">
        <h2>Upcoming Events in Mangalore</h2>
        {upcomingEvents.length === 0 ? (
          <p>No upcoming events at the moment.</p>
        ) : (
          <div className="event-list">
            {upcomingEvents.map((event) => (
              <div key={event._id} className="event-card">
                {event.imageUrl && (
                  <img src={event.imageUrl} alt={event.title} className="event-image" />
                )}
                <h3>{event.title}</h3>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p>{event.description}</p>
              </div>
            ))}
          </div>
        )}

        <button className="add-event-btn" onClick={() => setShowEventForm(!showEventForm)}>
          {showEventForm ? "Close Event Form" : "Add New Event"}
        </button>

        {showEventForm && (
          <div className="add-event-form">
            {["title", "date", "description", "location", "imageUrl"].map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={newEvent[field]}
                onChange={handleEventInputChange}
              />
            ))}
            <button className="submit-event-btn" onClick={handleAddEvent}>
              Submit Event
            </button>
          </div>
        )}
      </div>

      {/* <div className="inbox-section">
        <h2></h2>
        {Object.keys(inboxMessages).length === 0 ?
         (
          <p>No messages from visitors yet.</p>
        ) : (
          Object.entries(inboxMessages).map(([visitorId, messages]) => (
            <div key={visitorId} className="visitor-message-thread">
              <h4>Messages from Visitor: {visitorId}</h4>
              {messages.map((msg) => (
                <div key={msg._id} className="message-card">
                  <p><strong>Message:</strong> {msg.message}</p>
                  <p><strong>Sent:</strong> {new Date(msg.timestamp).toLocaleString()}</p>

                  {msg.reply ? (
                    <>
                      <p><strong>Your Reply:</strong> {msg.reply}</p>
                      <p><strong>Replied On:</strong> {new Date(msg.replyTimestamp).toLocaleString()}</p>
                    </>
                  ) : (
                    <ReplyForm
                      messageId={msg._id}
                      onReplySent={(replyText) => {
                        setInboxMessages((prev) => {
                          const updated = { ...prev };
                          updated[visitorId] = updated[visitorId].map((m) =>
                            m._id === msg._id ? { ...m, reply: replyText, replyTimestamp: new Date() } : m
                          );
                          return updated;
                        });
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          ))
        )}
      </div> */}

      <div className="gallery-section">
        <h2>Travel Memories Gallery</h2>
        <div className="gallery-container">
        <div className="gallery-grid">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOEnCDZUe-fp0s2LOgywuC6_vrE6WVQJxxiQ&s" alt="Mangalore Beach" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbB-Y8BECOQqJ8tI3VHxTfOX-Y8MIVbZqd3A&s" alt="Mangalore Temple" />
          <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2019/05/Cover-for-Romantic-places-in-Mangalore.jpg" alt="Mangalore Street" />
          <img src="https://www.savaari.com/blog/wp-content/uploads/2024/11/Mangalore.webp" alt="Mangalore Food" />
        </div>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2025 Our Travel Guides | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default GuidePage;
