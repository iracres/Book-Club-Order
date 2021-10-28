import React from 'react';
import '../../index.js';
import Box from '@material-ui/core/Box';
import Email from './layout/UserEmail';
import Password from './layout/UserPassword';
import SignedUp from './layout/FinishSignUpBtn'


function SignUp() {

    return (
        <div style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <Box
                container="true"
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
                <div className="SignUp">
                    <header className="SignUp-header">
                        <form>
                            <h5>Sign Up</h5>
                            <Email />
                            <Password />
                            <SignedUp />
                        </form>
                    </header>
                </div>
            </Box>
        </div >

    )
}

export default SignUp;
