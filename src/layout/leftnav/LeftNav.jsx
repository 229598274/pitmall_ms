import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import UserManagement from '../../views/userManagement/UserManagement';
import AuthorityManagement from '../../views/authorityManagement/AuthorityManagement';
import DepartmentManagement from '../../views/departmentManagement/DepartmentManagement';
import RoleManagement from '../../views/roleManagement/RoleManagement';
import Home from '../../views/home/Home';

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
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="0">
                  <Link to="/" >
                    <Icon type="home" />
                    <span className="nav-text">首页</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="1">
                  <Link to="/userManagement" >
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
                    <Link to="/departmentManagement">
                      <span className="nav-text">部门管理</span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to="/roleManagement">
                      <span className="nav-text">角色管理</span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Link to="/authorityManagement">
                      <span className="nav-text">权限管理</span>
                    </Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }} />
              <Route path="/" exact component={Home} />
              <Route path="/userManagement" component={UserManagement} />
              <Route path="/roleManagement" component={RoleManagement} />
              <Route path="/departmentManagement" component={DepartmentManagement} />
              <Route path="/authorityManagement" component={AuthorityManagement} />
              <Footer style={{ textAlign: 'center' }}>PitMall 2019 Created</Footer>
            </Layout>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default LeftNav;