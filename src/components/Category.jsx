import React from 'react';
import PropTypes from 'prop-types';

class Category extends React.Component {
  handleChange = ({ target }) => {
    if (target.checked) {
      target.checked = false;
      console.log('coisa');
    } else {
      console.log('true');
    }
  }

  render() {
    const { category } = this.props;
    return (
      <label htmlFor="category">
        { category }
        <input
          type="radio"
          id="category"
          data-testid="category"
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

Category.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Category;
