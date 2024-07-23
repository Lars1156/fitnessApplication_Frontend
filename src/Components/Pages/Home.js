import React from 'react';
import ScrollingReviews from '../Dashborad/ScrollingReviews';
import Services from './Services';
import AboutUs from './AboutUs';
import Footer from '../Footer'


const Home = () => {
  return (
    <div className="home-container">
    
      {/* Add other homepage content here */}
      <AboutUs/>
      <Services/>
      <ScrollingReviews/>
      <Footer/>
    </div>
  );
};

export default Home;
