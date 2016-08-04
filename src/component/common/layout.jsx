import React from 'react';
import NavBar from '../common/NavBar';
import Content from '../common/Content';
import Footer from '../common/Footer';

const Layout = React.createClass({
    render: function() {
        return (
            <div>
                <NavBar />
                <Content>
                    {this.props.children}
                </Content>
                <Footer />
            </div>
        )
    }
});
export default Layout;
