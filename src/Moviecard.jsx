import React, { Component } from 'react'
import './App.css';
class MovieCard extends Component {
    render() {
        const {data} = this.props;
        const BASEURL = import.meta.env.BASE_URL;
        return (
            <div className='Moviecard'>
                <img src={BASEURL + data.img} alt='' />
                <h3>{data.name}</h3>
                <p>
                    <span>Duration</span>
                    <span>{data.duration}</span>
                </p>
                <p>
                    <span>Price</span>
                    <span>{data.price}</span>
                </p>
            </div>
        );
    }
}
export default MovieCard;
