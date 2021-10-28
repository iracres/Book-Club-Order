import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Email from './layout/UserEmail';
import Password from './layout/UserPassword';


class ForgotPassword extends Component {
    constructor() {
        super();
        this.state = {
            email: '',

            open: false,
            setOpen: false,
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleClose = (e) => {
        this.setState({
            open: false
        });
    }

    handleSubmit = (e) => {
        this.setState({
            open: true
        })
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
                    <div className="ForgotPassword">
                        <header className="ForgotPassword-header">
                            <form onSubmit={this.handleSubmit}>
                                <h5>Forgot Password</h5>
                                <h6>Enter your email</h6>
                                <Email />
                                <Password />
                                <div className="MuiInput"
                                    display="flex"
                                    align="center">
                                    <Button className="MuiButton"
                                        variant="contained"
                                        color="secondary"
                                        onClick={this.handleSubmit}>
                                        Submit
                                    </Button>
                                    <Dialog
                                        open={this.state.open}
                                        onClose={this.handleClose}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description">
                                        <DialogTitle>
                                            Reset Password
                                        </DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                A link to reset your password has been sent to your email.
                                            </DialogContentText>
                                            <Button className="MuiButton"
                                                variant="outlined"
                                                color="secondary"
                                                onClick={this.handleClose}>
                                                OK
                                    </Button>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </form>
                        </header>
                    </div>
                </Box>
            </div>

        )
    }
}

export default ForgotPassword;
