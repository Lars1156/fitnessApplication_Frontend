import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import '../cssFiles/admin.css';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
 const navigate =  useNavigate();
  const onFinish = async (values) => {
    try {
        const payload = {
            email : values.email,
            password: values.password
        }
      const response = await axios.post('http://localhost:5008/api/loginAdmin', payload);
      console.log('Login Successful:', response.data);
      navigate('/admin_pannel');
    } catch (error) {
      console.error('Login Failed:', error);
      
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Login Failed:', errorInfo);
  };

  return (
    <div className="admin-login-container">
      <h2 className="admin-login-title">Admin Login</h2>
      <Form
        name="admin_login"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="admin-login-form"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="admin-login-button">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AdminLogin;
