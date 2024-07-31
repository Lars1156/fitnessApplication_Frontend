// src/components/Register.js
import React from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';
import '../cssFiles/register.css';

const Register = () => {
  const onFinish = async (values) => {
    try {
      const response = await axios.post('http://localhost:5008/api/register', values);
      message.success(response.data.msg);
    } catch (error) {
      message.error(error.response.data.msg || 'Registration failed');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="register-container">
      <h2>User Registration</h2>
      <Form
        name="user-registration"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
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
          rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!', min: 6 }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
