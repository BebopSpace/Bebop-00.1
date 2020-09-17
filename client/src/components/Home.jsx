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



    render() {
        
        return (
            <div className="container">
                <div className="navbar navbar-dark bg-dark">
                    <h1>test</h1>
                  
                </div>
            </div>
        )
    }
}
export default Home;