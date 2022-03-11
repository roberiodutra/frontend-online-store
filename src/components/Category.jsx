import React from 'react';
import PropTypes from 'prop-types';

class Category extends React.Component {
  render() {
    const { category: { name, id }, searchFunction } = this.props;
    return (
      <label htmlFor={ id }>
        { name }
        <input
          type="radio"
          id={ id }
          data-testid="category"
          onChange={ searchFunction }
          name="category"
        />
      </label>
    );
  }
}

Category.propTypes = {
  category: PropTypes.shape({ name: PropTypes.string, id: PropTypes.string }),
  radioChecked: PropTypes.bool,
}.isRequired;

export default Category;
