import React, { Component } from 'react';
import propTypes from 'prop-types';

class ProdutosCard extends Component {
  render() {
    const { item } = this.props;
    return (
      <div data-testid="product">
        <p>{item}</p>
      </div>
    );
  }
}

ProdutosCard.propTypes = {
  item: propTypes.string,
}.isRequired;

export default ProdutosCard;
