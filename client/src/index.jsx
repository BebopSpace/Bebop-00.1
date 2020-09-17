
import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/top_nav.jsx';
import Main from './catalog/main.jsx';





class Index extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <Main />

            </div>

        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));