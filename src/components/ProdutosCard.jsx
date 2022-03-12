import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addToCart } from '../services/addToCart';

class ProdutosCard extends Component {
  addToCartFunc = () => {
    const { item } = this.props;
    addToCart(item);
  }

  render() {
    const { item, produto } = this.props;
    const xablau = `/details/${item}`;
    const { title, price, thumbnail } = produto;
    return (
      <div data-testid="product">
        <p>{ produto.title }</p>
        <img src={ produto.thumbnail } alt="" />
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: xablau,
            state: {
              title,
              price,
              thumbnail,
            },
          } }
        >
          Detalhes
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.addToCartFunc }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProdutosCard.propTypes = {
  item: propTypes.string,
}.isRequired;

export default ProdutosCard;
