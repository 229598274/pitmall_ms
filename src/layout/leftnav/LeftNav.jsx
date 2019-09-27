import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
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
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} width='240' onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="video-camera" />
              <span className="nav-text">用户管理</span>
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
              <Menu.Item key="2"><span className="nav-text">部门管理</span></Menu.Item>
              <Menu.Item key="3"><span className="nav-text">角色管理</span></Menu.Item>
              <Menu.Item key="4"><span className="nav-text">权限管理</span></Menu.Item>
            </SubMenu>

          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          {this.props.children}
          <Footer style={{ textAlign: 'center' }}>PitMall 2019 Created</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default LeftNav;