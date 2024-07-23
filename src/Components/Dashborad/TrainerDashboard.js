import React, { useEffect, useState } from 'react';
import { Table, Button, message } from 'antd';
import axios from 'axios';
import '../cssFiles/dash.css';

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
      const response = await axios.get(``);
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const bookTrainer = async (trainerId,userId) => {
    try {
      const response = await axios.post('http://localhost:5008/api/bookingTrainer',{trainerId , userId });
      console.log("***that esponse for bookingTrainer", response);
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

  return (
    <div className="trainer-dashboard">
      <h2>Trainers</h2>
      <Table columns={trainerColumns} dataSource={trainers} rowKey="_id" />
      <h2>Your Bookings</h2>
      <Table columns={bookingColumns} dataSource={bookings} rowKey="_id" />
    </div>
  );
};

export default TrainerDashboard;
