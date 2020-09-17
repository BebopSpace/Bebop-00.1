import 'regenerator-runtime/runtime'
import React from 'react';
// `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
// const API_KEY = 'xpIqhwVAhSrijChDRWetZunAu1oOtrXROeUFtrt7'
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataContainer: []
        }
    }

    async componentDidMount() {
        const get_api = await fetch('https://api.le-systeme-solaire.net/rest/bodies/');
        const data = await get_api.json();
        this.setState({ dataContainer: data });
    }

    render() {
        console.log('container ======>', this.state.dataContainer);
        
        return (
            <div className="container">
                <div className="navbar navbar-dark bg-dark">
                    <h1>test</h1>
                   { this.state.dataContainer.map((data => 
                             <div className="">
                                 <h1>{data.date}</h1>
                                 <img src={data.img}></img>
                                 
                             </div>
                   ))}
                </div>
            </div>
        )
    }
}
export default Home;