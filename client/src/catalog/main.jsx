import React from 'react';
class Main extends React.Component {
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
        return (
            <div className="main">
                <span> Hello test </span>
                {/* { this.state.dataContainer.map((data => 
                             <div className="">
                                 <h1>{data.date}</h1>
                                 <img src={data.img}></img>
                                 
                             </div>
                   ))} */}
            </div>
        )
    }
}
export default Main;