import React from 'react';

import PropType from 'prop-types';

class InputSubtitle extends React.Component {
  render() {
    const { value, onchangeInput } = this.props;
    return (
      <label
        htmlFor="subtitle-input"
        data-testid="subtitle-input-label"
      >
        Subtítulo
        <input
          value={ value }
          data-testid="subtitle-input"
          id="subtitle-input"
          onChange={ onchangeInput }
          type="text"
          name="subtitle"
        />
      </label>
    );
  }
}

InputSubtitle.propTypes = {
  value: PropType.string.isRequired,
  onchangeInput: PropType.func.isRequired,
};

export default InputSubtitle;
