import React from 'react';
import '../../../index.js';
import Input from '@material-ui/core/Input';

export default class UserEmail extends React.Component {
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
                <Input placeholder="Email"
                    disableUnderline={true}
                    type="email" id="email"
                    onChange={this.handleChange} />
            </div>
        )
    }

}
