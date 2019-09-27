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
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="team" />
                  <span>用户管理</span>
                </span>
              }
            >
              <Menu.Item key="3">用户管理</Menu.Item>
              <Menu.Item key="4">权限管理</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="user" />
                  <span>账户管理</span>
                </span>
              }
            >
              <Menu.Item key="6">修改密码</Menu.Item>

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