import React from 'react';
class Reassign extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        }
    }
    reassignValue(event,text) {
        this.setState({ [text]: event.target.value })

    }

    render() {
        return (
            <div className="form-group">
                <input type="text" className="form-control" onChange={(event) => this.reassignValue(event, 'name')} value={this.state.name}></input>
                <input type="text" className="form-control" onChange={(event) => this.getInpValue(event, 'password')} value={this.state.password}></input>
        </div>

        )
    }
}
export default  Reassign;