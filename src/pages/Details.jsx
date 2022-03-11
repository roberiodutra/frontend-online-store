import React from 'react';
/* import propTypes from 'prop-types'; */
import { useLocation } from 'react-router-dom';

function Details() {
  const location = useLocation();
  const { title, price, thumbnail } = location.state;
  return (
    <div>
      <div data-testid="product-detail-name">
        { title }
        { price }
        <img src={ thumbnail } alt={ title } />
      </div>
    </div>
  );
}

export default Details;

/* class Details extends React.Component {
  render() {
    const { title, price, thumbnail } = this.props;
    return (
      <div>
        <div data-testid="product-detail-name">
          { title }
          { price }
          <img src={ thumbnail } alt={ title } />
        </div>
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

export default Details; */
