// implement AddMovie component here
import React from 'react';

import PropType from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  getValue = (e) => this.setState({ [e.target.name]: e.target.value });

  activeChecked = () => {
    this.setState((oldValue) => ({ bookmarkedOnly: !oldValue.bookmarkedOnly }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.getValue }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.getValue }
          onBookmarkedChange={ this.activeChecked }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropType.arrayOf().isRequired,
};

export default MovieLibrary;
