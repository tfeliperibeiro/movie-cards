import React from 'react';

import PropType from 'prop-types';

class InputText extends React.Component {
  render() {
    const { value, onchangeInput } = this.props;
    return (
      <label
        htmlFor="text-input"
        data-testid="title-input-label"
      >
        Título
        <input
          value={ value }
          data-testid="title-input"
          id="text-input"
          onChange={ onchangeInput }
          type="text"
          name="title"
        />
      </label>
    );
  }
}

InputText.propTypes = {
  value: PropType.string.isRequired,
  onchangeInput: PropType.func.isRequired,
};

export default InputText;
