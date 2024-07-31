// src/components/Home.js
import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import { SmileOutlined, HeartOutlined, StarOutlined } from '@ant-design/icons';
import AboutUs from './AboutUs';
import '../cssFiles/home.css';
import Services from './Services';
import ContactUs from './ContactUs';
import ScrollingReviews from '../Dashborad/ScrollingReviews';
import Footer from '../Footer';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Gym Fitness</h1>
        <p>Your fitness journey starts here. Join us to achieve your goals!</p>
        <Button type="primary" size="large">
          <Link to="/services">Get Started</Link>
        </Button>
      </div>

      <div className="testimonials-section">
        <h2>What Our Members Say</h2>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <SmileOutlined className="testimonial-icon" />
              <p>"Gym Fitness has completely transformed my life. The trainers are amazing!"</p>
              <p>- John Doe</p>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <HeartOutlined className="testimonial-icon" />
              <p>"I love the group classes. They are fun and challenging at the same time!"</p>
              <p>- Jane Smith</p>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <StarOutlined className="testimonial-icon" />
              <p>"The nutrition plans have helped me stay on track with my fitness goals."</p>
              <p>- Michael Lee</p>
            </Card>
          </Col>
        </Row>
      </div>

      <div className="cta-section">
        <h2>Ready to Start Your Journey?</h2>
        <Button type="primary" size="large">
          <Link to="/registerUser">Join Us Today</Link>
        </Button>
        
      </div>
      <AboutUs/>
      <Services/>
      <ContactUs/>
      <ScrollingReviews/>
      <Footer/>
    </div>
  );
};

export default Home;
