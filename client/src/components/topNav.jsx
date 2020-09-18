import React from 'react';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'home'
        }
    }

    render() {
        const inp = <input type="text" placeholder="Search..." className="form-control mr-sm-2" ></input>;
        return (
                <div className="navbar navbar-dark bg-dark">
                    <div className="navbar-brand" onClick={() => this.props.switch('home')}>Home</div>
                    <div className="navbar-brand" onClick={() => this.props.switch('contact')}>Contact</div>
                    <div className="navbar-brand" onClick={() => this.props.switch('about')}>About</div>
                    <div className="navbar-brand" onClick={() => this.props.switch('signup')}>Signup</div>
                    <div className="navbar-brand" onClick={() => this.props.switch('login')}>Login</div>
                    <div>{inp}</div>
                </div>
        )
    }
}

export default Nav;