import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Table, Divider, Button,Tag,Row,Col,Pagination } from 'antd';

class Authorize extends React.Component {
    render() {
        return (

                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>权限管理</Breadcrumb.Item>
                        <Breadcrumb.Item>授权管理</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        授权管理
                    </div>
                </Content>
 
        )
    }
}

export default Authorize