import React from 'react';
import './Home.css'

const Home = () => (

  <div className="home">

    <h2>Welcome to Drill It Kill It</h2>
   
    <p>Drill It Kill It is a central hub to keep track of and share roller derby drills. Currently this a DEMO ONLY APP. I would like to go live with this app once all the necessary features are in place for a solid user experience.</p>
    <div className="grid-container">
    <div className="homesection">
      <h3>Updates</h3>
      <p>Future Plans for this App include:</p>
      <ul>
        <li>Adding User model</li>
        <li>Likes feature fullly working</li>
        <li>Photos and videos upload feature</li>
      </ul>
    </div>
    
    <div className="homesection">
      <h3>News</h3>
      <p>Latest in Derby news & drills</p>
    </div>

    </div>
   
  </div>
);

export default Home;
