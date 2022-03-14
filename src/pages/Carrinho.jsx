import React, { Component } from 'react';
import { getsSavedItems } from '../services/addToCart';

class Carrinho extends Component {
  constructor() {
    super();
    this.state = {
      cartObjs: [],
      quantityWithId: [],
      counter: 1,
    };
  }

  componentDidMount() {
    this.cartItems();
  }

  cartItems = async () => {
    const itemsId = await getsSavedItems();
    this.setState({ cartObjs: itemsId },
      () => this.startCounting(itemsId));
  }

  startCounting = (itemsId) => {
    itemsId.forEach((ids) => {
      this.setState((previousState) => (
        { quantityWithId: [...previousState.quantityWithId, { id: ids.id, quantity: 1 }] }
      ));
    });
  }

  modifyQuantity = (event) => {
    const { quantityWithId } = this.state;
    const newArr1 = quantityWithId.filter((prod) => event.target.name === prod.id);
    const newArr2 = quantityWithId.filter((prod) => event.target.name !== prod.id);
    console.log(event.target.name);
    let diference = 0;
    if (event.target.id === 'increase') {
      diference += newArr1[0].quantity;
      diference += 1;
      this.setState({
        quantityWithId: [...newArr2, { id: event.target.name, quantity: diference }] });
    } else {
      diference += newArr1[0].quantity;
      diference -= 1;
      this.setState({
        quantityWithId: [...newArr2, { id: event.target.name, quantity: diference }] });
    }
  }

  renderCount = (itemId) => {
    const { quantityWithId } = this.state;
    const counter = quantityWithId.find((prod) => prod.id === itemId);
    if (counter !== undefined) {
      console.log(counter.quantity);
      return counter.quantity;
    }
  }

  render() {
    const { cartObjs, quantityWithId } = this.state;
    console.log(cartObjs);
    const { modifyQuantity, renderCount } = this;
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
                { renderCount(item.id) }
              </p>
              <button
                data-testid="product-increase-quantity"
                id="increase"
                name={ item.id }
                onClick={ modifyQuantity }
                type="submit"
              >
                +
              </button>
              <button
                data-testid="product-increase-quantity"
                id="decrease"
                name={ item.id }
                onClick={ modifyQuantity }
                type="submit"
              >
                -
              </button>
            </div>
          ))}
      </div>
    );
  }
}

export default Carrinho;
