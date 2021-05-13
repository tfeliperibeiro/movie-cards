import React from 'react';

import PropType from 'prop-types';

class Select extends React.Component {
  render() {
    const { value, onchangeSelect } = this.props;
    return (
      <label htmlFor="filtrar-genero" data-testid="select-input-label">
        Filtrar por gênero
        <select
          id="filtrar-genero"
          value={ value }
          onChange={ onchangeSelect }
          data-testid="select-input"
          name="selectedGenre"
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  value: PropType.string.isRequired,
  onchangeSelect: PropType.func.isRequired,
};

export default Select;
