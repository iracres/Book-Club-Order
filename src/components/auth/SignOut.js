import React, { Component } from "react";
import Box from '@material-ui/core/Box';


class Logout extends Component {
    render() {
        return (
            <div style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                <Box
                    container
                    bgcolor="primary"
                    boxShadow={3}
                    borderRadius={16}
                    width={300}
                    height={75}
                    display="flex"
                    justifyContent="center"
                    direction="column"
                    align="center"
                    spacing={0}>
                    <div className="Logout">
                        <h5>You have been logged out.</h5>
                    </div>
                </Box >
            </div>

        )
    }
}
export default Logout;