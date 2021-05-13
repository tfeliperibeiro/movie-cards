import React from 'react';

import PropType from 'prop-types';

class InputNumber extends React.Component {
  render() {
    const { value, onchangeInput } = this.props;
    return (
      <label
        htmlFor="rating-input"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          value={ value }
          data-testid="rating-input"
          id="rating-input"
          onChange={ onchangeInput }
          type="number"
          name="rating"
        />
      </label>
    );
  }
}

InputNumber.propTypes = {
  value: PropType.string.isRequired,
  onchangeInput: PropType.func.isRequired,
};

export default InputNumber;
