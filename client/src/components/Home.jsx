import 'regenerator-runtime/runtime'
import React from 'react';
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
    async componentDidMount() {
        const get_api = await fetch('https://api.le-systeme-solaire.net/rest/bodies/');
        const data = await get_api.json();
        this.setState({ dataContainer: data.bodies });
    }

Like() {
    const current = this.state.check
    this.setState({check : !current})
    
}


    render() {
        const blackHeart = <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
      </svg>;
       const whiteHeart =  <svg  width="1em" height="1em"  onClick={this.Like} viewBox="0 0 16 16" className="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
         <path fillRule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
       </svg>
        
        console.log('data', this.state.dataContainer)
        var test = this.state.dataContainer.map((elm, key) =>
            (   
                <div  key={key} className="card">
                    <img className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{elm.englishName}</h5>
                        <p className="card-text"></p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        {this.state.check === false ? whiteHeart : blackHeart}
                    </div>
                </div>
            ));


        return (
         
           <div  className="card-deck" >
                  { test }
           </div>
           
     
        )
    }
}
export default Home;