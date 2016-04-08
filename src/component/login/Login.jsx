import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

let Login = React.createClass({

    //getInitialState: function() {
    //    return {}
    //},

    handleSubmit(e) {
        e.preventDefault();
        console.log('收到表单值：', this.props.form.getFieldsValue());
    },

    render: function() {
        const { getFieldProps } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14}
        };
        return (
            <Form horizontal onSubmit={this.handleSubmit}>
                <FormItem label="邮箱：" {...formItemLayout}>
                    <Input type="text" {...getFieldProps("name")} />
                </FormItem>
                <FormItem label="密码：" {...formItemLayout}>
                    <Input type="password" {...getFieldProps("password")} />
                </FormItem>
                <FormItem {...formItemLayout} wrapperCol={{ span: 16, offset: 6 }}>
                    <label>
                        <Checkbox {...getFieldProps('agreement')} />自动登录
                    </label>
                </FormItem>
                <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: 24 }}>
                    <Button type="primary" htmlType="submit">登录</Button>
                </FormItem>
            </Form>
        )
    }
});
Login = Form.create()(Login);

export default Login;