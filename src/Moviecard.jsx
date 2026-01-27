import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { data } = this.props;
    const BASEURL = import.meta.env.BASE_URL || '/';

    return (
      <div className="movie-card">
        <div className="card-image-wrapper">
          <img 
            src={BASEURL + data.img} 
            alt={data.name} 
            className="movie-poster"
          />
          <div className="image-overlay" />
        </div>

        <div className="card-content">
          <h3 className="movie-title">{data.name}</h3>

          <div className="info-row">
            <span className="label">Duration</span>
            <span className="value">{data.duration}</span>
          </div>

          <div className="info-row price-row">
            <span className="label">Price</span>
            <span className="value price">{data.price}</span>
          </div>
        </div>

        <button className="watch-btn">Watch Now ▶</button>
      </div>
    );
  }
}

export default MovieCard;