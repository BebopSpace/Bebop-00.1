import 'regenerator-runtime/runtime'
import React from 'react';
import Card from './cards.jsx'
// `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
// const API_KEY = 'xpIqhwVAhSrijChDRWetZunAu1oOtrXROeUFtrt7'
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataContainer: [],
            check: false
        }
        this.Like = this.Like.bind(this);
    }
    Like() {
        const current = this.props.check
        this.setState({ check: !current })

    }
    async componentDidMount() {
        const get_api = await fetch('https://api.le-systeme-solaire.net/rest/bodies/');
        const data = await get_api.json();
        this.setState({ dataContainer: data.bodies });
    }

  
    render() {
        return (
            <Card card={this.state.dataContainer}  check={this.state.check} reaction={this.Like}/>
        )
    }


}
export default Home;