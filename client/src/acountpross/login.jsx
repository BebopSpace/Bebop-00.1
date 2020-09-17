import React from 'react';
import axios from 'axios';
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: '',
            signUpData :{
                name: '',
                password: ''
            }
        }
        this.check = this.check.bind(this);
        this.getInpValue = this.getInpValue.bind(this);
    }
    componentDidMount() {
        axios.get('/signup')
        .then( results => this.setState({ signUpData[name] : results.data }))
        .then( results => this.setState({ signUpData[password] : results.data }))
        .catch(err => console.log('[client side login]',err))
    }

    getInpValue(event, text) {
        this.setState({ [text]: event.target.value })
    }
    // onclick button
    check() {
        if(this.state.name === this.state.signUpData.name && this.state.password === this.state.signUpData.password){ return <Nav/> }
    }
    render() {
        const btn = <button type="button" className="btn btn-dark"  onClick={() => this.check()}></button>
        return (
            <div className="container">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" onChange={(event) => this.check(event, 'name')} value={this.state.name}></input>
                    <input type="text" className="form-control" onChange={(event) => this.check(event, 'password')} value={this.state.password}></input>
                    {btn}
                </div>
            </div>
        )
    }
}
export default Login;