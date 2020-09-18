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

        if (view === "home") {
            return <Home  handleClick={() => this.changeView('')}/>;
        } else if (view === "about") {
            return <About  handleClick={() => this.changeView('')}/>;
        } else if (view === "contact") {
            return <Contact  handleClick={() => this.changeView('')}/>;
        } else if (view === "signup") {
            return <Signup  handleClick={() => this.changeView('')}  />;
        } else if (view === "login") {
            return <Login  handleClick={() => this.changeView('')}  />;
        } else {
            const viewsElements = this.state.views.map((v, key) => {
                // console.log('test===>',v)
                return (
                 
                    <div
                    key={key}
                    className="navbar-brand"
                    value={v}
                    onClick={() => this.changeView(v)}
                >

                    {v}
                    </div>

                );
            });

            return <div className="navbar navbar-dark bg-dark">{viewsElements} </div>;
        }
    }
}
ReactDOM.render(<Index />, document.getElementById("root"));
