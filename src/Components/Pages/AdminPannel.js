import React from 'react';
import { Layout, Button, Tabs } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import ContactDetails from './ContactDetails';
import UserDetails from './UserDetails';
import TrainerDetails from './TrainerDetails';
import '../cssFiles/adminp.css';
import { useNavigate } from 'react-router-dom';

const { Header, Content } = Layout;

const AdminPannel = () => {
    const navigate = useNavigate()
  const handleLogout = () => {
      navigate('/')
    console.log("Logged out");
  };

  return (
    <Layout>
      <Header className="header">
        <div className="logo">Admin Panel</div>
        <Button
          type="primary"
          icon={<LogoutOutlined />}
          onClick={handleLogout}
          className="logout-button"
        >
          Logout
        </Button>
      </Header>
      <Layout>
        
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane tab="Contact Details" key="1">
                <ContactDetails />
              </Tabs.TabPane>
              <Tabs.TabPane tab="User Details" key="2">
                <UserDetails />
              </Tabs.TabPane>
              <Tabs.TabPane tab="Trainer Details" key="3">
                <TrainerDetails />
              </Tabs.TabPane>
            </Tabs>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AdminPannel;
