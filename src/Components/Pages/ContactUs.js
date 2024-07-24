import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import '../cssFiles/contact.css';

const { TextArea } = Input;

const ContactUs = () => {
  const onFinish = async (values) => {
    try {
      const response = await axios.post('http://localhost:5008/api/contact', values);
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Failed:', error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <Form
        name="contact"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        className="contact-form"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: 'Please input your message!' }]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactUs;
