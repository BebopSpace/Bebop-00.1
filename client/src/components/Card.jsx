import React from 'react';
import axios from 'axios';
class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            check: false
        }
        this.Like = this.Like.bind(this);
    }

    Like() {
        const current = this.state.check
        this.setState({ check: !current })
        axios.post('/favorite',this.state)
        .then(res => res.sed('favorite seucc !'))
        .catch(err =>  console.error('err',err))

    }

    render() {
        const bookmartWhite = <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bookmark" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
        </svg>;
        const Blackbookmark = <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bookmark-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5V2z" />
        </svg>;
        const blackHeart = <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
        </svg>;
        const whiteHeart = <svg width="1em" height="1em" onClick={this.Like} viewBox="0 0 16 16" className="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
        </svg>;
        return (
            <div  className="card">
                <img className="card-img-top" />
                { bookmartWhite}
                <div className="card-body">
                    <h5 className="card-title">{this.props.card.englishName}</h5>
                    <p className="card-text"></p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    {this.state.check === false ? whiteHeart : blackHeart}
                </div>
            </div>
        )
    }
}

export default Card;