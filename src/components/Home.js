// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';

// function Home() {
//   const navigate = useNavigate();

//   const handleExplore = () => {
//     navigate('/explore');
//   };

//   return (
//     <div className="home-container">
//       <h1>Visitor | Guide | Blogger</h1>
//       <button onClick={handleExplore} className="explore-button">Explore</button>
//     </div>
//   );
// }

// export default Home;


// import React from 'react';
// import Card from './Card';
// import './Home.css';

// function Home() {
//   return (
//     <div className="home-container">
//       <h1>Welcome to Travel Tour</h1>
//       <div className="card-container">
//         <Card title="Visitor" path="/visitor" />
//         <Card title="Guide" path="/guide" />
//         <Card title="Blogger" path="/blogger" />
//       </div>
//     </div>
//   );
// }

// export default Home;

import React from 'react';
import Card from './Card';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Mangalore Tourism.</h1>
      <div className="card-container">
        <Card title="Visitor" />
        <Card title="Guide" />
        <Card title="Blogger" />
      </div>
    </div>
  );
}

export default Home;


