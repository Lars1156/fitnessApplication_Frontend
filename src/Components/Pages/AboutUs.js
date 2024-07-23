import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import '../cssFiles/about.css';

const { Title, Paragraph } = Typography;

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-hero">
        <Title level={1} className="hero-title">About Us</Title>
      </div>

      <div className="about-us-content">
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={24} md={12}>
            <Card className="about-us-card">
              <Title level={2}>Our Mission</Title>
              <Paragraph>
                Our mission is to help you achieve your fitness goals through personalized training, state-of-the-art facilities, and a supportive community.
              </Paragraph>
            </Card>
          </Col>

          <Col xs={24} sm={24} md={12}>
            <Card className="about-us-card">
              <Title level={2}>Our Values</Title>
              <Paragraph>
                We believe in integrity, dedication, and community. Our team is committed to providing a positive and inclusive environment for everyone.
              </Paragraph>
            </Card>
          </Col>
        </Row>

        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={24} md={12}>
            <Card className="about-us-card">
              <Title level={2}>Our Team</Title>
              <Paragraph>
                Meet our team of certified trainers and fitness experts who are passionate about helping you succeed. Each member brings a unique set of skills and experiences to support your fitness journey.
              </Paragraph>
            </Card>
          </Col>

          <Col xs={24} sm={24} md={12}>
            <Card className="about-us-card">
              <Title level={2}>Our Facilities</Title>
              <Paragraph>
                Our gym is equipped with the latest fitness equipment, spacious workout areas, and amenities designed to provide you with the best possible workout experience.
              </Paragraph>
            </Card>
          </Col>
        </Row>

        {/* <Row justify="center" className="about-us-image-row">
          <Col xs={24} sm={24} md={12}>
            <img src="/images/gym1.jpg" alt="Gym Facility" className="about-us-image" />
          </Col>
          <Col xs={24} sm={24} md={12}>
            <img src="/images/gym2.jpg" alt="Gym Facility" className="about-us-image" />
          </Col>
        </Row> */}
      </div>
    </div>
  );
};

export default AboutUs;
