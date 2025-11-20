import React from "react";
import { useLocation } from "react-router-dom";
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import Footer from "../../component/Footer"; // Adjust as needed

import "./PlaceDetail.css";

const PlaceDetail = () => {
  const { state } = useLocation();
  const { place, description, image } = state;

  const extraImages = [
    image, image, image, image // Replace with real different images
  ];

  return (
    <div className="place-detail-page">
      {/* <Navbar /> */}
      <h1 className="place-heading">{place}</h1>
      <img src={image} alt={place} className="place-main-img" />

      <section className="about-place">
        <h2>About {place}</h2>
        <p>{description.repeat(10).slice(0, 600)}</p>
      </section>

      {/* <section className="place-gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {extraImages.map((img, i) => (
            <div key={i} className="gallery-card">
              <img src={img} alt={`extra-${i}`} />
            </div>
          ))}
        </div>
      </section> */}

<section className="place-gallery">
  <h2>Gallery</h2>
  <div className="gallery-grid">
    <div className="gallery-card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFivGUo0dYX_C3kfGIq7q8fjDd7yHkd0VPkA&s" alt="gallery-1" />
    </div>
    <div className="gallery-card">
      <img src="https://mangaloretourism.in/images/places-to-visit/header/mangalore-local-sightseeing-tour-packages-header-mangalore-tourism.jpg.jpg" alt="gallery-2" />
    </div>
    <div className="gallery-card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVad3rGqwAxqsQYAuvyDKKxowfL9-VWrPaYw&s" alt="gallery-3" />
    </div>
    <div className="gallery-card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDpZF44Sx6WgIooGjm6JpHP0K_RPNKOC-Xuw&s" alt="gallery-4" />
    </div>
  </div>
</section>


      <section className="place-map">
        <h2>Location Map</h2>
        <iframe
          title="map"
          src={`https://www.google.com/maps?q=${place}&output=embed`}
          className="map-frame"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      <Footer />
    </div>
  );
};

export default PlaceDetail;
