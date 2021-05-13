import React from 'react';

import PropType from 'prop-types';

class Select extends React.Component {
  render() {
    const { value, onclick } = this.props;
    return (
      <label htmlFor="select-add-movie" data-testid="genre-input-label">
        Gênero
        <select
          id="select-add-movie"
          data-testid="genre-input"
          value={ value }
          onChange={ onclick }
          name="genre"
        >
          <option data-testid="genre-option" value="action">
            Ação
          </option>
          <option data-testid="genre-option" value="comedy">
            Comédia
          </option>
          <option data-testid="genre-option" value="thriller">
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  value: PropType.string.isRequired,
  onclick: PropType.func.isRequired,
};

export default Select;
