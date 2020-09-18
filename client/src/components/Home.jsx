import 'regenerator-runtime/runtime'
import React from 'react';
import Cards from './Cards.jsx'
// `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
// const API_KEY = 'xpIqhwVAhSrijChDRWetZunAu1oOtrXROeUFtrt7'
class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Cards />
        )
    }


}
export default Home;
// check={this.state.check}
//  reaction={this.Like} 
// card={this.state.dataContainer}