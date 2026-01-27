import React, { Component } from 'react';
import MovieCard from './Moviecard.jsx';
import './App.css'
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      courses: [
        { name: "Pokémon", duration: "2hrs", price: "Rs 100", img: "1.jpg" },
        { name: "Doraemon",     duration: "2hrs", price: "Rs 100", img: "2.jpg" },
        { name: "Toy Story 3",        duration: "2hrs", price: "Rs 100", img: "3.jpg" },
        { name: "Car's 3 ",    duration: "2hrs", price: "Rs 100", img: "4.jpeg" },
      ]
    };
  }

  render() {
    const { courses } = this.state;

    return (
      <div className="app-wrapper">
        <header className="header">
          <h1>Animated Movies Catalog </h1>
          <p className="subtitle">2500080004</p>
        </header>

        <main className="movie-grid">
          {courses.map((movie, index) => (
            <MovieCard key={index} data={movie} />
          ))}
        </main>

        <footer className="footer">
          Copyright © 2026. All Rights Reserved – SHAIK SAMEER AHMED
        </footer>
      </div>
    );
  }
}