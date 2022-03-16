import React from 'react';
import CartItems from '../components/CartItems';

class Carrinho extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.prodList();
  }

  prodList = async () => {
    const products = JSON.parse(localStorage.getItem('cartItems')) || [];
    products.forEach((item) => {
      this.setState((prevState) => ({
        products: [...prevState.products, item],
      }));
    });
  }

  render() {
    const { products } = this.state;
    return (
      (products.length === 0)
        ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        : (
          <div>
            { products.map((product, i) => (
              <CartItems key={ i } product={ product } />
            ))}
          </div>
        ));
  }
}

export default Carrinho;
