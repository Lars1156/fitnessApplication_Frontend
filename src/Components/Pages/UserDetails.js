import React, { useEffect, useState } from 'react';
import { Table, Button } from 'antd';
import axios from 'axios';

const UserDetails = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get('http://localhost:5008/api/getAllUsers');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:5008/api/deleteUser/${userId}`);
      setData(data.filter(user => user._id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Button type="danger" onClick={() => handleDelete(record._id)}>
          Delete
        </Button>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} rowKey="_id" />;
};

export default UserDetails;
