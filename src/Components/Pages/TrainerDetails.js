import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';

const TrainerDetails = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchTrainerDetails = async (values) => {
      try {
        
        const response = await axios.get('http://localhost:5008/api/getAllTrainer');
        console.log(response,"response");

        setData(response.data);
      } catch (error) {
        console.error('Error fetching trainer details:', error);
      }
    };

    fetchTrainerDetails();
  }, []);

 
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Specialization',
      dataIndex: 'specialization',
      key: 'specialization',
    },
    
  ];

  return <Table columns={columns} dataSource={data} rowKey="_id" />;
};

export default TrainerDetails;
