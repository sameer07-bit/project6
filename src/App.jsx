import React, { Component } from 'react';
import MovieCard from './Moviecard.jsx';
import './App.css'
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      courses: [
        { name: "Pokémon", duration: "2hrs", price: "Rs 105", img: "1.jpg" },
        { name: "Doraemon",     duration: "2hrs", price: "Rs 90", img: "2.jpg" },
        { name: "Toy Story 3",        duration: "2hrs", price: "Rs 100", img: "3.jpg" },
        { name: "Cars 3 ",    duration: "2hrs", price: "Rs 140", img: "4.jpeg" },
         { name: "Frozen", duration: "2hrs", price: "Rs 120", img: "5.jpg" },
    { name: "Kung Fu Panda", duration: "1hr 45min", price: "Rs 110", img: "6.jpg" },
    { name: "Minions", duration: "1hr 50min", price: "Rs 105", img: "7.jpg" },
    { name: "Baby Boss", duration: "1hr 37min", price: "Rs 115", img: "8.jpg" },
    { name: "Incredibles", duration: "1hr 55min", price: "Rs 130", img: "9.jpeg" },
    { name: "Moana", duration: "1hr 47min", price: "Rs 125", img: "10.jpeg" },
    { name: "Beyblade", duration: "1hr 30min", price: "Rs 100", img: "11.jpg" },
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