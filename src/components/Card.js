// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Card.css';

// function Card({ title, path }) {
//   const navigate = useNavigate();

//   const handleExplore = () => {
//     navigate(path);
//   };

//   return (
//     <div className="card">
//       <h2>{title}</h2>
//       <button onClick={handleExplore} className="card-button">Explore</button>
//     </div>
//   );
// }

// export default Card;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

function Card({ title }) {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/login'); // First go to login
  };

  return (
    <div className="card">
      <h2>{title}</h2>
      <button onClick={handleExplore} className="card-button">Explore</button>
    </div>
  );
}

export default Card;
