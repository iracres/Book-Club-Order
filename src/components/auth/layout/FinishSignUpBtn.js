import React, { Component } from 'react';
import '../../../index.js';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class FinishSignUp extends Component {
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
            <div className="MuiInput"
                display="flex"
                align="center">
                <Button className="MuiButton"
                    variant="contained"
                    color="secondary"
                    onClick={this.handleSubmit}>
                    Sign Up
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle>
                        Sign Up
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            You have been signed up! Please return to the Login page to log in.
                        </DialogContentText>
                        <RouterLink to="/">
                            <Button className="MuiButton"
                                variant="outlined"
                                color="secondary"
                                onClick={this.handleClose}>
                                Login Page
                            </Button>
                        </RouterLink>
                    </DialogContent>
                </Dialog>
            </div>
        )
    }
}
export default FinishSignUp