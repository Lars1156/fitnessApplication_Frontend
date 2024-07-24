import React, { useEffect, useState } from 'react';
import { Table, Button, message, Layout, Menu } from 'antd';
import axios from 'axios';
import '../cssFiles/dash.css';

const { Header, Sider, Content } = Layout;

const TrainerDashboard = () => { 
  const [trainers, setTrainers] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchTrainers();
    fetchBookings();
  }, []);

  const fetchTrainers = async () => {
    try {
      const response = await axios.get('http://localhost:5008/api/getAllTrainer');
      setTrainers(response.data);
    } catch (error) {
      console.error('Error fetching trainers:', error);
    }
  };

  const fetchBookings = async () => {
    try {
      const response = await axios.get('http://localhost:5008/api/getUserBookings'); // Update this URL
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const bookTrainer = async (trainerId, userId) => {
    try {
      const response = await axios.post('http://localhost:5008/api/bookingTrainer', { trainerId, userId });
      console.log("***that response for bookingTrainer", response);
      message.success(response.data.msg);
      fetchTrainers();
      fetchBookings();
    } catch (error) {
      console.error('Error booking trainer:', error);
      message.error('Error booking trainer');
    }
  };

  const trainerColumns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Specialization', dataIndex: 'specialization', key: 'specialization' },
    { title: 'Availability', dataIndex: 'available', key: 'available', render: (available) => available ? 'Available' : 'Not Available' },
    { title: 'Action', key: 'action', render: (text, record) => record.available ? <Button onClick={() => bookTrainer(record._id)}>Book</Button> : null }
  ];

  const bookingColumns = [
    { title: 'Trainer', dataIndex: ['trainerId', 'name'], key: 'trainer' },
    { title: 'Date', dataIndex: 'date', key: 'date', render: (date) => new Date(date).toLocaleDateString() },
    { title: 'Status', dataIndex: 'status', key: 'status' }
  ];

  const handleLogout = () => {
    // Implement your logout logic here
    message.success('Logged out successfully');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider theme="dark">
        <div className="logo">Gym Fitness</div>
        <Menu theme="dark" mode="vertical" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Button type="link">Trainer Details</Button>
          </Menu.Item>
          <Menu.Item key="2">
            <Button type="link" onClick={handleLogout}>Logout</Button>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="header">
          <h1>User Dashboard</h1>
        </Header>
        <Content style={{ padding: '20px' }}>
          <h2>Trainers</h2>
          <Table columns={trainerColumns} dataSource={trainers} rowKey="_id" />
          <h2>Your Bookings</h2>
          <Table columns={bookingColumns} dataSource={bookings} rowKey="_id" />
        </Content>
      </Layout>
    </Layout>
  );
};

export default TrainerDashboard;
