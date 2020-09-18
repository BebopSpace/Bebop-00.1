import React from 'react';
import axios from 'axios';
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: '',
            // signUpData : {
            //     name: '',
            //     password: ''
            // }
        }
        // this.check = this.check.bind(this);
        this.getInpValue = this.getInpValue.bind(this);
    }
    chek() {
        axios.post('/login',this.state)
        .then(res => console.log(res))
        .catch(err => console.log('[client side login]',err))
    }

    getInpValue(event, text) {
        this.setState({ [text]: event.target.value })
    }
    // onclick button
    // check() {
    //     if(this.state.name === this.state.signUpData.name && this.state.password === this.state.signUpData.password){ return <Nav/> } }
    render() {
        const btn = <button type="button"onClick={this.chek.bind(this)} className="btn btn-dark"  >Submit</button>
        const forgotPass = <span onclick={this.changeView()}>Forgot Password !</span>
        return (
            <div className="form-group">
                {/* <div className="input-group mb-3"> */}
                    <input type="text" className="form-control" onChange={(event) => this.getInpValue(event, 'name')} value={this.state.name}></input>
                    <input type="password" className="form-control" onChange={(event) => this.getInpValue(event, 'password')} value={this.state.password}></input>
                    {btn}
                {/* </div> */}
            </div>
        )
    }
}
export default Login;
// onClick={() => this.check()}
   // .then(results => this.setState({ name : results.data }))
        // .then(results => this.setState({ password : results.data }))