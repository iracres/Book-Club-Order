import React, { Component } from 'react';
import '../../index.js';
import Box from '@material-ui/core/Box';
import LoginBtn from './layout/LoginBtn';
import ForgotPassLink from './layout/ForgotPassBtn';
import SignUpBtn from './layout/SignupBtn';
import Email from './layout/UserEmail';
import Password from './layout/UserPassword';
import { Link } from 'react-router-dom'


class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            user: {
                id: '',
                name: '',
                email: '',
            },
            pastUsers: [],

        }
    }

    render() {
        return (
            <div style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                <Box
                    container = "true"
                    color="grey.200"
                    bgcolor="primary.light"
                    boxShadow={3}
                    borderRadius={16}
                    width={300}
                    height={300}
                    display="flex"
                    justifyContent="center"
                    direction="column"
                    align="center"
                    spacing={0}>
                    <div className="Login">
                        <header className="Login-header">
                            <form onSubmit={this.handleSubmit}>
                                <h5>Sign In</h5>
                                <Email />
                                <Password />
                                <LoginBtn />
                                <Box m={2} color= "primary.light" />
                                <SignUpBtn />
                                <Box m={2} color= "primary.light" />
                                <ForgotPassLink />                            
                            </form>
                        </header>
                    </div>
                </Box>
                <Link to="/OrderBar">Placeholder link to OrderBar</Link> 
                <br/>
                <Link to="/ClientHome">Placeholder link to ClientHome</Link>
            </div>

        )
    }
}

export default Login;
