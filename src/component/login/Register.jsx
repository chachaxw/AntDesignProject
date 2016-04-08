import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

let Register = React.createClass({

    getInitialState() {
        return { loading: false };
    },

    handleSubmit(e) {
        e.preventDefault();
        console.log('收到表单值：', this.props.form.getFieldsValue());
    },

    componentDidMount: function() {

    },

    enterLoading: function() {
        this.setState({loading: true})
    },

    render: function() {
        const { getFieldProps } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14}
        };
        return (
            <Form horizontal onSubmit={this.handleSubmit}>
                <FormItem label="姓名：" {...formItemLayout}>
                    <Input type="text" {...getFieldProps("name")} />
                </FormItem>
                <FormItem label="邮箱：" {...formItemLayout}>
                    <Input type="text" {...getFieldProps("email")} />
                </FormItem>
                <FormItem label="密码：" {...formItemLayout}>
                    <Input type="password" {...getFieldProps("password")} />
                </FormItem>
                <FormItem {...formItemLayout}  wrapperCol={{ span: 16, offset: 6 }}>
                    <label>
                        <Checkbox {...getFieldProps('agreement')} />同意爱影协议
                    </label>
                </FormItem>
                <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: 24 }}>
                    <Button type="ghost" htmlType="submit" loading={this.state.loading} onClick={this.enterLoading}>下一步</Button>
                </FormItem>
            </Form>
        )
    }
});
Register = Form.create()(Register);

export default Register;