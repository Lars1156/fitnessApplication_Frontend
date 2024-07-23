import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';

const ContactDetails = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        const response = await axios.get('http://localhost:5008/api/getAllContacts');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching contact details:', error);
      }
    };

    fetchContactDetails();
  }, []);

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
      title: 'Message',
      dataIndex: 'message',
      key: 'message',
    },
    {
      title: 'Date',
      dataIndex: 'submittedAt',
      key: 'submittedAt',
      render: (text) => new Date(text).toLocaleString(),
    },
  ];

  return <Table columns={columns} dataSource={data} rowKey="_id" />;
};

export default ContactDetails;
