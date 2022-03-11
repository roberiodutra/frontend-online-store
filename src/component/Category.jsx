import React from 'react';
import PropTypes from 'prop-types';

class Category extends React.Component {
  render() {
    const { category } = this.props;
    return (
      <label htmlFor="category">
        { category }
        <input
          type="radio"
          id="category"
          data-testid="category"
        />
      </label>
    );
  }
}

Category.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Category;
