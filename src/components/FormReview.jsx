import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Evaluations from './Evaluations';

class FormReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      rate: 0,
      comment: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  saveRating = (event) => {
    event.preventDefault();
    const { id } = this.props;
    const { email, rate, comment } = this.state;
    const newRating = { id, rateStorage: { email, rate, comment } };
    let ratings = JSON.parse(localStorage.getItem('evaluations') || '[]');

    ratings = [...ratings, newRating];
    localStorage.setItem('evaluations', JSON.stringify(ratings));
  }

  render() {
    const { email, rate, comment } = this.state;
    const { id } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="email">
            Email:
            <input
              data-testid="product-detail-email"
              id="email"
              name="email"
              type="email"
              value={ email }
              placeholder="E-mail"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="rate">
            { ['1', '2', '3', '4', '5']
              .map((number) => (<input
                key={ number }
                data-testid={ `${number}-rating` }
                name="rate"
                type="checkbox"
                value={ number }
                checked={ rate >= number }
                onChange={ this.handleChange }
              />))}
          </label>
          <label htmlFor="comment">
            Avalie o produto:
            <textarea
              data-testid="product-detail-evaluation"
              name="comment"
              id="comment"
              value={ comment }
              placeholder="Deixe seu comentário..."
              onChange={ this.handleChange }
              cols="20"
              rows="10"
              maxLength="30"
            />
          </label>
          <button
            type="submit"
            data-testid="submit-review-btn"
            onClick={ this.saveRating }
          >
            Avaliar
          </button>
        </form>
        <div>
          <Evaluations id={ id } />
        </div>
      </div>
    );
  }
}

FormReview.propTypes = {
  id: PropTypes.string.isRequired,
};

export default FormReview;
