import React from 'react';
import './App.css';

import Header from './components/Header';
import Movie from './data';
import MovieLibrary from './components/MovieLibrary';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <MovieLibrary movies={ Movie } />
        </main>
      </div>
    );
  }
}

export default App;
