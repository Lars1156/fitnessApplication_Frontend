import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Dropdown, Button } from 'antd';
import {
  HomeOutlined,
  InfoCircleOutlined,
  ContactsOutlined,
  UserOutlined,
  SettingOutlined,
  DownOutlined
} from '@ant-design/icons';
import './nav.css';

const { Header } = Layout;

const loginMenu = (
  <Menu>
    <Menu.Item key="1">
      <Link to="/user-login">User Login</Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link to="/trainer-login">Trainer Login</Link>
    </Menu.Item>
    <Menu.Item key="3">
      <Link to="/admin-login">Admin Login</Link>
    </Menu.Item>
  </Menu>
);

const Navbar = () => {
  return (
    <Layout className="layout">
      <Header className="header">
        <div className="logo">Gym Fitness</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} className="menu">
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<SettingOutlined />}>
            <Link to="/services">Services</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<InfoCircleOutlined />}>
            <Link to="/about">About Us</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<ContactsOutlined />}>
            <Link to="/contact">Contact Us</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Dropdown overlay={loginMenu} placement="bottomCenter">
              <Button type="link" icon={<UserOutlined />}>
                Login <DownOutlined />
              </Button>
            </Dropdown>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navbar;
