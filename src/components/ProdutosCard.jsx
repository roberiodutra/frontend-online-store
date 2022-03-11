import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
/* import Details from '../pages/Details'; */
/* import Details from '../pages/Details'; */

class ProdutosCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
    };
  }

  details = () => {
    this.setState({ showDetails: true });
  }

  render() {
    const { item, /* details */ produto } = this.props;
    const xablau = `/details/${item}`;
    const { showDetails } = this.state;
    const { title, price, thumbnail } = produto;
    return (
      <div data-testid="product">
        {/* <Link
          to="/details"
          data-testid="product-detail-link"
          onClick={ this.details }
        >
          { item }
        </Link> */}
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
          { item }
        </Link>
      </div>
    );
  }
}

ProdutosCard.propTypes = {
  item: propTypes.string,
}.isRequired;

export default ProdutosCard;
