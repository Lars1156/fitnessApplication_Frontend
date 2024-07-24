import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import '../cssFiles/login.css';
import axios from 'axios';
const UserLogin = () => {
    const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
        const payload ={
            email:values.email,
            password: values.password
        }
        console.log("***Payload", payload);
        const response = await axios.post('http://localhost:5008/api/loginUser',payload);
        console.log('Login successful', response.data);
        console.log("** Response",response);
        navigate('/trainer_dashboard')        
    } catch (error) {
        console.error('Login failed', error);
    }
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login-container">
    <div className="login-form-container">
      <h2>Login</h2>
      <Form
        name="login"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
    <div className="login-image-container">
      <img src="" alt="Gym" />
    </div>
  </div>
  );
};

export default UserLogin;
