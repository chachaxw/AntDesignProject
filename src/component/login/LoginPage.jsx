import React from 'react';
import { Tabs } from 'antd';
import '../App.less';
import Login from './Login';
import Register from './Register';

const TabPane = Tabs.TabPane;

const LoginPage = React.createClass({
    render: function() {
        return (
            <div className="login-register-box">
                <Tabs defaultActiveKey="1" >
                    <TabPane tab="注册" key="1">
                        <Register />
                    </TabPane>
                    <TabPane tab="登录" key="2">
                        <Login />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
});

export default LoginPage;