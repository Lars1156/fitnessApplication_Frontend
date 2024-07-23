// src/components/Services.js
import React from 'react';
import { Card, Col, Row } from 'antd';
import '../cssFiles/service.css';

const services = [
  {
    title: 'Personal Training',
    description: 'Get one-on-one training with our certified trainers to achieve your fitness goals.',
    image: '/images/personal-training.jpg',
  },
  {
    title: 'Group Classes',
    description: 'Join our group classes for a fun and motivating workout experience.',
    image: '/images/group-classes.jpg',
  },
  {
    title: 'Nutrition Consulting',
    description: 'Meet with our nutrition experts to create a personalized diet plan.',
    image: '/images/nutrition-consulting.jpg',
  },
  {
    title: 'Yoga',
    description: 'Relax and improve your flexibility with our yoga sessions.',
    image: '/images/yoga.jpg',
  },
  {
    title: 'Cardio Workouts',
    description: 'Boost your heart health with our variety of cardio workouts.',
    image: '/images/cardio.jpg',
  },
  {
    title: 'Strength Training',
    description: 'Build muscle and strength with our comprehensive strength training programs.',
    image: '/images/strength-training.jpg',
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <Row gutter={[16, 16]}>
        {services.map((service, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              hoverable
              cover={<img alt={service.title} src={service.image} />}
              className="service-card"
            >
              <Card.Meta title={service.title} description={service.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Services;
