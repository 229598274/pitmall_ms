import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import User from '../../views/user/User';
import Authority from '../../views/authority/Authority';
import Department from '../../views/department/Department';
import Role from '../../views/role/Role';
import Home from '../../views/home/Home';
import Authorize from '../../views/authorize/Authorize';

import './leftnav.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class LeftNav extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    console.log('this.props', this.props)
    return (
      <BrowserRouter>
        <div>
          <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={this.state.collapsed} width='240' onCollapse={this.onCollapse}>
              <div className="logo" />
              <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
                <Menu.Item key="0">
                  <Link to="/" >
                    <Icon type="home" />
                    <span className="nav-text">首页</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="1">
                  <Link to="/user" >
                    <Icon type="user" />
                    <span className="nav-text">用户管理</span>
                  </Link>
                </Menu.Item>
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="team" />
                      <span>权限管理</span>
                    </span>
                  }
                >
                  <Menu.Item key="2">
                    <Link to="/department">
                      <span className="nav-text">部门管理</span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to="/role">
                      <span className="nav-text">角色管理</span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Link to="/authority">
                      <span className="nav-text">权限管理</span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="5">
                    <Link to="/authorize">
                      <span className="nav-text">授权管理</span>
                    </Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }} />
              <Route path="/" exact component={Home} />
              <Route path="/user" component={User} />
              <Route path="/role" component={Role} />
              <Route path="/department" component={Department} />
              <Route path="/authority" component={Authority} />
              <Route path="/authorize" component={Authorize} />
              <Footer style={{ textAlign: 'center' }}>PitMall 2019 Created</Footer>
            </Layout>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default LeftNav;