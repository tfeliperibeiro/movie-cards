import React from 'react';

import PropType from 'prop-types';

class InputImage extends React.Component {
  render() {
    const { value, onchangeInput } = this.props;
    return (
      <label
        htmlFor="image-input"
        data-testid="image-input-label"
      >
        Imagem
        <input
          value={ value }
          data-testid="image-input"
          id="image-input"
          onChange={ onchangeInput }
          type="text"
          name="imagePath"
        />
      </label>
    );
  }
}

InputImage.propTypes = {
  value: PropType.string.isRequired,
  onchangeInput: PropType.func.isRequired,
};

export default InputImage;
