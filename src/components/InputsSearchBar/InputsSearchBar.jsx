import React from 'react';

import PropType from 'prop-types';

class InputsSearchBar extends React.Component {
  render() {
    const {
      typeInput,
      textLabel,
      datatestidLabel,
      valueInput,
      datatestidInput,
      onchangeInput,
      idInput,
      htmlforLabel,
      checkedInput,
    } = this.props;
    return (
      <label htmlFor={ htmlforLabel } data-testid={ datatestidLabel }>
        { textLabel }
        <input
          type={ typeInput }
          value={ valueInput }
          data-testid={ datatestidInput }
          onChange={ onchangeInput }
          id={ idInput }
          checked={ checkedInput }
          name="searchText"
        />
      </label>
    );
  }
}

InputsSearchBar.propTypes = {
  typeInput: PropType.string.isRequired,
  textLabel: PropType.string.isRequired,
  datatestidLabel: PropType.string.isRequired,
  valueInput: PropType.string.isRequired,
  datatestidInput: PropType.string.isRequired,
  onchangeInput: PropType.func.isRequired,
  idInput: PropType.string.isRequired,
  htmlforLabel: PropType.string.isRequired,
  checkedInput: PropType.bool.isRequired,
};

export default InputsSearchBar;
