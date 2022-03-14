import React from 'react';
import propTypes from 'prop-types';
import { addToCart } from '../services/addToCart';
import FormReview from '../components/FormReview'

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      price: '',
      thumbnail: '',
    };
    this.addToCartFunc = this.addToCartFunc.bind(this);
    this.getInfo = this.getInfo.bind(this);
  }

  componentDidMount() {
    this.getInfo();
  }

  async getInfo() {
    const { match: { params: { id } } } = this.props;
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const item = await response.json();
    this.setState({ title: item.title, price: item.price, thumbnail: item.thumbnail });
  }

  async addToCartFunc() {
    const { match: { params: { id } } } = this.props;
    addToCart(id);
  }

  render() {
    const { match: { params: { id } } } = this.props;
    const { title, price, thumbnail } = this.state;
    return (
      <div>
        <div data-testid="product-detail-name">
          <h1>{ title }</h1>
          <p>{ price }</p>
          <img src={ thumbnail } alt={ title } />
        </div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.addToCartFunc }
        >
          Adicionar ao carrinho
        </button>
        <FormReview id={ id } />
      </div>
    );
  }
}

Details.propTypes = {
  arrProdutos: propTypes.shape({
    id: propTypes.string,
    title: propTypes.string,
    price: propTypes.string,
    thumbnail: propTypes.string,
  }),
}.isrequired;

export default Details;
