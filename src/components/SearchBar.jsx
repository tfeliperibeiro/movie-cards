import React from 'react';
import PropType from 'prop-types';
import Input from './InputsSearchBar/InputsSearchBar';
import Select from './select/SelectSearchBar';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <Input
          typeInput="text"
          textLabel="Inclui o texto"
          datatestidLabel="text-input-label"
          valueInput={ searchText }
          datatestidInput="text-input"
          onchangeInput={ onSearchTextChange }
          idInput="input-title"
          htmlforLabel="input-title"
        />
        <Input
          typeInput="checkbox"
          textLabel="Mostrar somente favoritos"
          datatestidLabel="checkbox-input-label"
          valueInput={ bookmarkedOnly }
          datatestidInput="checkbox-input"
          onchangeInput={ onBookmarkedChange }
          idInput="checkbox-input"
          htmlforLabel="checkbox-input"
          checkedInput={ bookmarkedOnly }
        />
        <Select value={ selectedGenre } onchangeSelect={ onSelectedGenreChange } />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropType.string.isRequired,
  onSearchTextChange: PropType.func.isRequired,
  bookmarkedOnly: PropType.bool.isRequired,
  onBookmarkedChange: PropType.func.isRequired,
  selectedGenre: PropType.string.isRequired,
  onSelectedGenreChange: PropType.func.isRequired,
};

export default SearchBar;
