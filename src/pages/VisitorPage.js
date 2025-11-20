import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
import "./VisitorPage.css";
import axios from "axios";
import ChatBox from "../components/ChatBox";
import VisitorChatBox from "./VisitorChatBox";




// Components
const GuideProfile = ({ name, experience, language, location, contactNo, imageUrl, onChatClick }) => (
  <div className="guide-profile-card">
    <img src={imageUrl} alt={name} className="guide-profile-img" />
    <h4>{name}</h4>
    <p><strong>Experience:</strong> {experience}</p>
    <p><strong>Language:</strong> {language}</p>
    <p><strong>Location:</strong> {location}</p>
    <p><strong>Contact:</strong> {contactNo}</p>
    {/* <button className="contact-btn" onClick={onChatClick}>Message</button> */}
  </div>
);


const RecentBlog = ({ id, title, description, Author, image, content }) => {
  const navigate = useNavigate();
  const handleReadMore = () => {
    navigate(`/blog/${id}`, {
      state: { blog: { id, title, Author, description, image, content } },
    });
  };
 
  
  

  return (
    <div className="recent-blog-card">
      <img src={image} alt={title} className="blog-card-img" />
      <h4>{title}</h4>
      <h5>by {Author}</h5>
      <p>{description}</p>
      <button className="read-more-btn" onClick={handleReadMore}>Read More</button>
    </div>
  );
};

const AvailablePlace = ({ id, place, description, image }) => {
  const navigate = useNavigate();
  const handleReadMore = () => {
    navigate(`/place/${id}`, {
      state: { place, description, image },
    });
  };

  return (
    <div className="available-place-card">
      <img src={image} alt={place} className="place-card-img" />
      <h4>{place}</h4>
      <p>{description}</p>
      <button className="read-more-btn" onClick={handleReadMore}>Read More</button>
    </div>
  );
};

const UpcomingEvent = ({ event, date, image, description }) => (
  <div className="upcoming-event-card">
    <img src={image} alt={event} className="event-card-img" />
    <h4>{event}</h4>
    <p><strong>Date:</strong> {date}</p>
    <p>{description}</p>
  </div>
);

// ✅ BloggerCard component
const BloggerCard = ({ name, email, bio, imageUrl }) => (
  <div className="blogger-card">
    <img src={imageUrl} alt={name} className="blogger-card-img" />
    <h4>{name}</h4>
    <p><strong>Email:</strong> {email}</p>
    <p>{bio}</p>
  </div>
);

const VisitorPage = ({ guide }) => {
  const [guides, setGuides] = useState([]);
  const [bloggers, setBloggers] = useState([]);
  const [showChatbox, setShowChatbox] = useState(false);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const visitorId = '68203e8d7a3789718c51b6c6'; // You can replace this with logged-in user ID
  const guideId = '68203ea57a3789718c51b6c9';   // You can pass selected guide ID dynamically




  const toggleChatbox = () => setShowChatbox(!showChatbox);

  const handleSendMessage = () => {
    if (message.trim()) {
      fetch('http://localhost:5000/api/messages/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          senderId: 'visitor1', // Ideally this should be dynamic (Visitor's ID)
          receiverId: guide._id, // Guide's ID
          senderType: 'visitor',
          message,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('Message sent', data);
          setMessage(''); // Reset the message box
        })
        .catch((err) => console.error('Error sending message:', err));
    }
  };
  

  useEffect(() => {
    // Fetch guides
    const fetchGuides = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/guides");
        const data = await response.json();
        setGuides(data);
      } catch (error) {
        console.error("Error fetching guide data:", error);
      }
    };

    // Fetch bloggers
    const fetchBloggers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/bloggers");
        setBloggers(res.data);
      } catch (err) {
        console.error("Error fetching bloggers:", err);
      }
    };
    const visitorId = "68183b762d516debed90877c"; // Replace with actual logged-in visitor ID
  axios.get(`http://localhost:5000/api/messages/chat?senderId=${visitorId}`)
    .then(res => setChatMessages(res.data))
    .catch(err => console.error("Failed to fetch messages:", err));

    fetchGuides();
    fetchBloggers();
  }, []);

  // Fetch events
fetch('http://localhost:5000/api/events')
.then((res) => res.json())
.then((data) => setEvents(data))
.catch((err) => console.error('Error fetching events:', err));

  

  // Sample blogs
  const [blogs] = useState([
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbf_-tAKhDEJG81sYT1xwBZMy5K6golFEFMQ&s",
      title: "Exploring the Mangalore",
      Author: "John",
      description: "A guide to the best treks and viewpoints.",
      content: "This blog explores different treks and viewpoints in Mangalore..."
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbf_-tAKhDEJG81sYT1xwBZMy5K6golFEFMQ&s",
      title: "Journey through the Mangalore Heritage",
      Author: "John",
      description: "Experience the historic beauty of the city.",
      content: "Dive into Mangalore’s rich cultural and historical roots..."
    }
  ]);

  const [places] = useState([
    {
      id: 1,
      place: "Mangalore Beaches.",
      description: "Known for its beaches and vibrant nightlife.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7j9QvNVbNsAFs-xusDKn6vy2EExbhhcCIBw&s"
    },
    {
      id: 2,
      place: "Udupi",
      description: "Famous for its temples and coastal cuisine.",
      image: "https://images.unsplash.com/photo-1595931320730-c4589902db9a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dWR1cGl8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 3,
      place: "Kadri temple",
      description: "Explore the sacred architecture of Kadri Temple in Mangalore, Karnataka.",
      image: "https://c8.alamy.com/comp/B5WYCY/evening-at-the-kadri-manjunatha-temple-in-mangalore-india-B5WYCY.jpg"
    },
    {
      id: 4,
      place: "Someshwar Beach.",
      description: "Someshwar Beach is a popular destination near Mangalore, Karnataka, known for its serene atmosphere, stunning sunsets.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY2aDiFIlMW9kBOAYPOGrkP5G4gSal_9c2VA&s"
    }
  ]);

  // const [events] = useState([
  //   {
  //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoN7aEB3qFtUeDq7rnQmNfY_tcJaqR2V5hVg&s",
  //     event: "Kudremukh Trek",
  //     date: "6 - 8 June 2025",
  //     description: "Moderate to challenging trek with stunning summit views."
  //   },
  //   {
  //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjxvmvEDKP5aqZkuHK5pndnFrjN-RgRd7vYg&s",
  //     event: "Sahaja Yoga Meditation",
  //     date: "June 20, 2025",
  //     description: "Kundalini awakening and spiritual growth through meditation."
  //   }
  // ]);
  const [events, setEvents] = useState([]);


  
  const [selectedGuide, setSelectedGuide] = useState(null);

  const handleChatClick = (guide) => {
    setSelectedGuide(guide);
  };
  
  const navigate = useNavigate();
  return (
    <div className="visitor-page">
        <div>
      {/* Other sections like cards, bloggers, places, etc. */}

      {/* Chatbox Section */}
      <div style={{ marginTop: '30px' }}>
        <VisitorChatBox visitorId={visitorId} guideId={guideId} />
      </div>
    </div>

      {/* <Navbar /> */}

      <section className="guide-profiles">
      <h2 class="heading-expert-guides">Explore with Our Expert Guides</h2>
      <div className="guide-list">
        {guides.map((guide, index) => (
        <GuideProfile
          key={index}
          {...guide}
          onChatClick={() => handleChatClick(guide)}
        />
      ))}

        </div>

        {selectedGuide && (
          <ChatBox
            guide={selectedGuide}
            onClose={() => setSelectedGuide(null)}
          />
        )}
         {guide ? (
  <div>
    <button onClick={toggleChatbox}>Message {guide.name}</button>
    {showChatbox && (
      <div className="chatbox">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    )}
  </div>
) : (
  <p></p> // or just nothing
)}


      </section>

      <section className="places-section">
      <h2 class="heading-destinations">Discover the Best Destinations</h2>

        <div className="places-list">
          {places.map(place => (
            <AvailablePlace key={place.id} {...place} />
          ))}
        </div>
      </section>

      <section className="events-section">
      <h2 class="heading-things-to-do">Upcoming Events in Mangalore</h2>

  <div className="events-container">
    {events.map((event) => (
      <div className="event-card" key={event._id}>
        <img src={event.imageUrl} alt={event.name} />
        <div className="event-content">
          <h3>{event.name}</h3>
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <p>{event.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* ✅ New Bloggers Section */}
      <section className="bloggers-section">
      <h2 class="heading-guide-to-mangalore">Blog.</h2>

        <div className="blogger-list">
          {bloggers.map((blogger) => (
            <BloggerCard key={blogger._id} {...blogger} />
          ))}
        </div>
      </section>

      <section className="explore-section">
      <h2 class="heading-adventure">Explore More In Mangalore.</h2>
      <div className="explore-cards">
    <div className="explore-card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0or2Jw97wTdU9yxu75weSleAjTNrgdlXngQ&s" alt="Heritage" />
      <h4>Heritage</h4>
      <p>Discover rich cultural landmarks and historic sites.</p>
      <button className="read-more-btn" onClick={() => navigate("/explore/heritage")}>Read More</button>
    </div>
    <div className="explore-card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgQYImyDWrhlTBBMdR9BUJfBHTArr0zouNg&s" alt="Culture" />
      <h4>Culture</h4>
      <p>Experience vibrant traditions, festivals, and lifestyle.</p>
      <button className="read-more-btn" onClick={() => navigate("/explore/culture")}>Read More</button>
    </div>
    <div className="explore-card">
      <img src="https://content3.jdmagicbox.com/comp/mangalore/l5/0824px824.x824.161016110038.a4l5/catalogue/adventure-bejai-mangalore-ca-kir25.jpg" alt="Adventure" />
      <h4>Adventure</h4>
      <p>Unleash your inner explorer with thrilling activities.</p>
      <button className="read-more-btn" onClick={() => navigate("/explore/adventure")}>Read More</button>
    </div>
  </div>
</section>

<section className="cuisine-section">
<h2 class="heading-hidden-gems">Mangalore Top Cuisine.</h2>

  <div className="cuisine-images">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj8OHX9Tq541UfrrmqACeLBUa25kP0GJGsig&s" alt="Sambhar & Rasam" />
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf64HEM4ykB1BSzXm2o6XRn7AXy0OYE9TmiQ&s" alt="Neer Dosa" />
  </div>
  <p className="cuisine-description">
    Mangalore cuisine is a flavorful blend of coastal and South Indian traditions. Known for its use of coconut, curry leaves, and bold spices, dishes like Chicken Ghee Roast, Neer Dosa, and Fish Curry are local favorites. The food often balances tangy tamarind, fiery red chilies, and aromatic herbs. Influences from Konkan, Kerala, and Udupi regions create a rich diversity in taste. From spicy seafood delights to sweet treats like Mangalore Buns, the cuisine reflects the cultural depth of the region. It's a must-try for food lovers seeking an authentic and unforgettable culinary experience in Karnataka.
  </p>
</section>

<footer className="site-footer">
  <div className="footer-content">
    <p>&copy; {new Date().getFullYear()} TravelExplorer. All rights reserved.</p>
    <p>Contact us: info@travelexplorer.com | +91 98765 43210</p>
  </div>
</footer>

    </div>
    
  );
};

export default VisitorPage;

