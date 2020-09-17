import React from 'react';
import axios from 'axios'; 
import Login from './login.jsx'
class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            check: false,
            view: '',
            name: '',
            lastName: '',
            email: '',
            age: '',
            password: '',
        }
        this.getValues = this.getValues.bind(this);
        this.sign = this.sign.bind(this);
        this.changeView = this.changeView.bind(this);
    }
    
    sign() {
        axios.post('/signup', this.state)
         .then(res => console.log(res))
          .catch(err => console.log('[client side]', err))
    }

    getValues(event, text) {
        event.preventDefault();
        this.setState({ [text]: event.target.value })
    }

    changeView(view) {
        if (view === 'logIn') {
            return <Login data={this.state} />
        }
    }
    

    render() {
        const submit = <button onClick={() => this.changeView('logIn')}  onClick={() => this.sign()} className="btn btn-dark">Submit</button>
        return (
            <div className="signUp">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter your name..." onChange={(event) => this.getValues(event, 'name')} value={this.state.name}></input>
                    <input type="text" className="form-control" placeholder="Enter your Lastname..." onChange={(event) => this.getValues(event, 'lastName')} value={this.state.lastName}></input>
                    <input type="text" className="form-control" placeholder="Enter your Email..." onChange={(event) => this.getValues(event, 'email')} value={this.state.email}></input>
                    <input type="text" className="form-control" placeholder="Enter your Age..." onChange={(event) => this.getValues(event, 'age')} value={this.state.age}></input>
                    <input type="text" className="form-control" placeholder="Enter your Password..." onChange={(event) => this.getValues(event, 'password')} value={this.state.password}></input>
                    {submit}
                </div>
            </div>


        )
    }
}
export default Signup;