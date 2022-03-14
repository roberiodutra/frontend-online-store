import React, { Component } from 'react';
import { getsSavedItems } from '../services/addToCart';

class Carrinho extends Component {
  constructor() {
    super();
    this.state = {
      cartObjs: [],
    };
  }

  componentDidMount() {
    this.cartItems();
  }

  cartItems = async () => {
    const itemsId = await getsSavedItems();
    this.setState({ cartObjs: itemsId });
  }

  render() {
    const { cartObjs } = this.state;
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        {(cartObjs)
          && cartObjs.map((item) => (
            <div
              key={ item.id }
            >
              <p
                data-testid="shopping-cart-product-name"
              >
                {item.title}
              </p>
              <p
                data-testid="shopping-cart-product-quantity"
              >
                1
              </p>
            </div>
          ))}
      </div>
    );
  }
}

export default Carrinho;
