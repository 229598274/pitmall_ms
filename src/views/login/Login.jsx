import React from 'react';
import 'antd/dist/antd.css';
import './login.css';
import { Form, Icon, Input, Button, Checkbox, Tabs, Row, Col } from 'antd';
import { connect } from 'react-redux'
import reduxActions from '../../reduxActions'

const TabPane = Tabs.TabPane;

class NormalLoginForm extends React.Component {


    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        console.log('props', this.props)
        const { form: { getFieldDecorator }, login, getHello } = this.props;
        return (
            <Form onSubmit={this.handleSubmit} layout='horizontal' className="login-form">
                <Form.Item>
                    {/*   {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="请输入用户名"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="请输入密码"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>记住我</Checkbox>)}
                    <a className="login-form-forgot" href="">忘记密码</a> */}
                    <Button type="primary" htmlType="submit" onClick={login} className="login-form-button">login</Button>
                    <Button type="primary" htmlType="submit" onClick={getHello} className="login-form-button">getHello</Button>
                </Form.Item>
            </Form>
        );
    }
}

const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);


const mapStateToProps = (state) => {
    return {
        loginReducer: state.loginReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    login: () => {
        dispatch(reduxActions.loginActions.login())
    },
    getHello: () => {
        dispatch(reduxActions.loginActions.getHello())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)


