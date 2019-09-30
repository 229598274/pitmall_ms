import React from 'react';
import { Form, Row, Col, Input, Button, Icon } from 'antd';
import './searchbar.css';

class AdvancedSearchForm extends React.Component {
    state = {
        expand: false,
    };


    handleSearch = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('Received values of form: ', values);
        });
    };

    handleReset = () => {
        this.props.form.resetFields();
    };

    toggle = () => {
        const { expand } = this.state;
        this.setState({ expand: !expand });
    };

    render() {
        return (
            <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                {this.state.expand && <Row gutter={24} >
                    <Col span={8}>
                        <Form.Item label={`姓名`} >
                            <Input placeholder="姓名" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label={`年龄`}>
                            <Input placeholder="年龄" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item >
                            <Button type="primary" htmlType="submit">查询</Button>
                            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>重置</Button>
                            <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
                                展开 <Icon type={'down'} />
                            </a>
                        </Form.Item>
                    </Col>
                </Row>}
                {!this.state.expand && <Row gutter={24} >
                    <Col span={8}>
                        <Form.Item label={`姓名`} >
                            <Input placeholder="姓名" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label={`年龄`}>
                            <Input placeholder="年龄" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label={`部门`}>
                            <Input placeholder="部门" />
                        </Form.Item>
                    </Col>

                </Row>}
                {!this.state.expand && <Row gutter={24}>
                    <Col span={8}>
                        <Form.Item label={`职位`} >
                            <Input placeholder="职位" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label={`地址`}>
                            <Input placeholder="地址" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item >
                            <Button type="primary" htmlType="submit">查询</Button>
                            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>重置</Button>
                            <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
                                收起<Icon type={'up'} />
                            </a>
                        </Form.Item>
                    </Col>
                </Row>}
                <Form.Item >
                    <Button type="primary" icon="plus">创建</Button>
                    <Button style={{ marginLeft: 8 }} type="primary">批量停用</Button>
                    <Button style={{ marginLeft: 8 }} type="primary">批量启用</Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);

export default WrappedAdvancedSearchForm