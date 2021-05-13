import React from 'react';

import PropType from 'prop-types';
import InputTitle from './inputsAddMovie/InputTitle';
import InputSubtitle from './inputsAddMovie/InputSubtitle';
import InputNumber from './inputsAddMovie/InputNumber';
import TextArea from './text-area/Textarea';
import InputImage from './inputsAddMovie/InputImage';
import Select from './select/SelectAddMovie';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  getValue = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ title } onchangeInput={ this.getValue } />
        <InputSubtitle value={ subtitle } onchangeInput={ this.getValue } />
        <InputNumber value={ rating } onchangeInput={ this.getValue } />
        <TextArea value={ storyline } onchange={ this.getValue } name="storyline" />
        <InputImage value={ imagePath } onchangeInput={ this.getValue } />
        <Select value={ genre } onclick={ this.getValue } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ () => {
            onClick(this.state);
            this.setState({
              subtitle: '',
              title: '',
              imagePath: '',
              storyline: '',
              rating: 0,
              genre: 'action',
            });
          } }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropType.func.isRequired,
};

export default AddMovie;
