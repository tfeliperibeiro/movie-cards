import React from 'react';

import PropType from 'prop-types';

class Textarea extends React.Component {
  render() {
    const { value, onchange, name } = this.props;
    return (
      <label htmlFor="text-area" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="text-area"
          value={ value }
          data-testid="storyline-input"
          onChange={ onchange }
          name={ name }
        />
      </label>
    );
  }
}

Textarea.propTypes = {
  value: PropType.string.isRequired,
  onchange: PropType.func.isRequired,
  name: PropType.string.isRequired,
};

export default Textarea;
