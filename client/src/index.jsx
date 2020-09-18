import React from "react";
import ReactDOM from "react-dom";
import Nav from "./components/topNav.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Signup from "./acountpross/signup.jsx";
import Login from "./acountpross/login.jsx";
// import Main from "./catalog/main.jsx";
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: "",
            views: ["home", "about", "contact", "signup", "login"],
        };

        this.changeView = this.changeView.bind(this);
        this.renderView = this.renderView.bind(this);
    }

    changeView(view) {
        // console.log('target ===>',event.target.value);
        console.log("view ===>", view);
        this.state.view = view;
        this.setState({
            view: this.state.view
        });
        // console.log('current view ===> ', this.state.views)
    }
    
    renderView() { }

    render() {
        const view = this.state.view;

        
        const viewsElements = this.state.views.map((v, key) => 
                   
                     
            <div
            key={key}
            className="navbar-brand"
            value={v}
            onClick={() => this.changeView(v)}
        >

            {v}
            </div>

        
        )
            return (
            <div>
            <div className="navbar navbar-dark bg-dark">{viewsElements} </div>
           { (view === "home") ?
                <Home  handleClick={() => this.changeView('')}/>
            : (view === "about") ?
                 <About  handleClick={() => this.changeView('')}/>
            : (view === "contact") ?
                 <Contact  handleClick={() => this.changeView('')}/>
             : view === "signup" ?
                <Signup  handleClick={() => this.changeView('')}  />
            : (view === "login") ?
                <Login  handleClick={() => this.changeView('')}  />
            : null
            }
                </div>
            )
        }
    }

ReactDOM.render(<Index />, document.getElementById("root"));
