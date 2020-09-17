import React from 'react';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Signup from '../acountpross/signup.jsx';
import Login from '../acountpross/login.jsx';
class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'home'
        }
        this.changeView = this.changeView.bind(this);
        // this.renderView = this.renderView.bind(this);
    }

    changeView(view) {
        this.setState({ view: view });
        console.log('current view ===> ', this.state.view)
    }
    renderView() {
        const view = this.state.view;

        if (view === 'home') {
            return <Home handleClick={() => this.changeView('')} />
        } else if (view === 'about') {
            return <About handleClick={() => this.changeView('')} />
        } else if (view === 'contact') {
            return <Contact handleClick={() => this.changeView('')} />
        } else if (view === 'Signup') {
            return <Signup handleClick={() => this.changeView('')} />
        } else if (view === 'Login') {
            return <Login handleClick={() => this.changeView('')} />
        }

    }


    render() {
        const inp = <input type="text" placeholder="Search..." className="form-control mr-sm-2"     ></input>;
        return (
            <div className="container">
                <div className="navbar navbar-dark bg-dark">
                    <div className="navbar-brand" onClick={() => this.changeView('home')}>Home</div>
                    <div className="navbar-brand" onClick={() => this.changeView('contact')}>Contact</div>
                    <div className="navbar-brand" onClick={() => this.changeView('about')}>About</div>
                    <div className="navbar-brand" onClick={() => this.changeView('Signup')}>Signup</div>
                    <div className="navbar-brand" onClick={() => this.changeView('Login')}>Login</div>
                    <div>{inp}</div>

                    <div>
                        {this.renderView}
                    </div>

                </div>
            </div>
        )
    }
}

export default Nav;