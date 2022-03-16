import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItems extends Component {
  constructor(props) {
    super(props);
    const { product } = this.props;
    this.state = {
      product,
      quantity: 1,
    };
  }

  modifyQuantity = ({ target: { name } }) => {
    const { quantity } = this.state;
    if (name === 'decrease') {
      if (quantity === 1) return;
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1,
      }));
    }

    if (name === 'increase') {
      this.setState((prevState) => ({
        quantity: prevState.quantity + 1,
      }));
    }
  }

  render() {
    const { product, quantity } = this.state;
    return (
      <div>
        { !product
          ? (<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>)
          : (
            <div>
              <p
                data-testid="shopping-cart-product-name"
              >
                {product.title}
              </p>
              <p
                data-testid="shopping-cart-product-quantity"
              >
                { quantity }
              </p>
              <button
                data-testid="product-increase-quantity"
                name="increase"
                id={ product.id }
                onClick={ this.modifyQuantity }
                type="submit"
              >
                +
              </button>
              <button
                data-testid="product-decrease-quantity"
                name="decrease"
                id={ product.id }
                onClick={ this.modifyQuantity }
                type="submit"
              >
                -
              </button>
            </div>
          )}
      </div>
    );
  }
}

CartItems.propTypes = {
  product: PropTypes.shape({
    quantity: PropTypes.number,
  }).isRequired,
};

export default CartItems;
