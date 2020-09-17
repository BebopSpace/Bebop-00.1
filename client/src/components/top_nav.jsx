import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'



class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'home',
            contact: 'contact',
            about: 'about'
        }
        this.changeView = this.changeView.bind(this);
        this.changeView = this.changeView.bind(this)
    }

    changeView(option) {
        this.setState({ view: option });
        console.log('current view ===> ', this.state.view)

    }
    renderView() {
        const { view } = this.state;

        if (view === 'home') {
            return <Home handleClick={() => this.changeView('')} />
        } else if (view === 'about') {
            return <About handleClick={() => this.changeView('')} />
        } else if (view === 'contact') {
            return <Contact handleClick={() => this.changeView('')} />
        }
    }


    render() {
        const inp = <input type="text" placeholder="Search..." className="inp"    ></input>;
        return (
            <div className="container">
                <div className="navbar navbar-dark bg-dark">
                    <div onClick={this.changeView('home')}>Home</div>
                    <div onClick={this.changeView('contact')}>Contact</div>
                    <div onClick={this.changeView('about')}>About</div>
                    <div>{inp}</div>
                    {this.renderView}
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Nav />, document.getElementById('root'));