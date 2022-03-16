import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import addToCart from '../services/addToCart';

class ProdutosCard extends Component {
  addToCartFunc = async () => {
    const { produto } = this.props;
    addToCart(produto);
  }

  render() {
    const { item, produto } = this.props;
    const xablau = `/details/${item}`;
    const { title, price, thumbnail, id } = produto;
    return (
      <div data-testid="product">
        <p>{ produto.title }</p>
        <img src={ produto.thumbnail } alt="" />
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: xablau,
            state: {
              item,
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
          id={ id }
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
