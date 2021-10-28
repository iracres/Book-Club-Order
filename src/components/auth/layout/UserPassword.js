import React from 'react';
import '../../../index.js';
import Input from '@material-ui/core/Input';

export default class UserPassword extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {

        }
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    render() { 
        return (
            <div className="MuiInput">
                <Input placeholder="Password"
                    disableUnderline={true}
                    type="password"
                    id="password"
                    onChange={ this.handleChange } />
            </div>
        )
    }
    
}
