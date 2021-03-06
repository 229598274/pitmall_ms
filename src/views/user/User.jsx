import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Table, Divider, Checkbox, Switch, Button, Tag, Row, Col, Pagination } from 'antd';
import LeftNav from '../../layout/leftnav/LeftNav'
import SearchBar from './SearchBar'

const { Header, Content, Footer, Sider } = Layout;

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '电话',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: '部门',
        dataIndex: 'department',
        key: 'department',
    },
    {
        title: '职位',
        dataIndex: 'position',
        key: 'position',
    },
    {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '状态',
        dataIndex: 'state',
        key: 'state',
        render: state => <Switch defaultChecked />
    },
    {
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <span>
                <a>查看详情</a>
                <Divider type="vertical" />
                <a>修改</a>
                <Divider type="vertical" />
                <a>删除</a>
                <Divider type="vertical" />
                <a>重置密码</a>
            </span>
        ),
    },
];

const data = [
    {
        key: '1',
        name: '张三',
        age: 32,
        phone: '13812341234',
        address: '大连市高新园区学子街300号2单元808',
        position: '高级软件工程师',
        department: '软件开发部',
        state: false
    }
];

class UserManagement extends React.Component {
    
    render() {
        console.log('12312312');
        return (
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>用户管理</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    <SearchBar />
                    <Table columns={columns} dataSource={data} rowSelection={[]} />
                </div>
            </Content>
        )
    }
}

export default UserManagement