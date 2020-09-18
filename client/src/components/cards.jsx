import React from 'react';
import Card from './Card.jsx'
class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataContainer: [],
            check: false
        }
    }

    
    async componentDidMount() {
        const get_api = await fetch('https://api.le-systeme-solaire.net/rest/bodies/');
        const data = await get_api.json();
        this.setState({ dataContainer: data.bodies });
    }

        render() {
          
            // ================== HeartReact ============
           

            console.log('data', this.state.dataContainer)

            const test = this.state.dataContainer.map((elm, key) =>
                (
                   <Card key={key} card={elm} />
                ));


            return (

                <div className="card-deck" >
                    {test}
                </div>


            )
        }
    }

 export default Cards;