import React from 'react';
import { Layout, Row, Col, Typography, Space } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
import './cssFiles/foot.css';

const { Title, Paragraph } = Typography;
const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer className="footer">
      <Row gutter={24}>
        <Col span={8}>
          <Title level={4} className="footer-title">Gym Fitness</Title>
          <Paragraph className="footer-description">
            Your ultimate destination for fitness and wellness. Join us today and transform your life.
          </Paragraph>
        </Col>
        <Col span={8}>
          <Title level={4} className="footer-title">Quick Links</Title>
          <Space direction="vertical">
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact Us</a>
          </Space>
        </Col>
        <Col span={8}>
          <Title level={4} className="footer-title">Contact Us</Title>
          <Paragraph>123 Fitness Lane, Wellness City, USA</Paragraph>
          <Paragraph>Email: info@gymfitness.com</Paragraph>
          <Paragraph>Phone: +1 (234) 567-890</Paragraph>
        </Col>
      </Row>
      <Row justify="center" className="footer-social">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FacebookOutlined className="social-icon" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <TwitterOutlined className="social-icon" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <InstagramOutlined className="social-icon" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <LinkedinOutlined className="social-icon" />
        </a>
      </Row>
      <Row justify="center" className="footer-bottom">
        <Paragraph>© 2024 Gym Fitness. All rights reserved.</Paragraph>
      </Row>
    </Footer>
  );
};

export default FooterComponent;
