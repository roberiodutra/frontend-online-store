import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Evaluations extends Component {
  render() {
    const { evaluations } = this.props;

    return (
      <div>
        {evaluations.map((storage, i) => (
          <div key={ i }>
            <p>{`${storage.rateStorage.email}`}</p>
            <p>{storage.rateStorage.rate}</p>
            <p>{storage.rateStorage.comment}</p>
          </div>
        ))}
      </div>
    );
  }
}

Evaluations.propTypes = {
  evaluations: PropTypes.arrayOf(Number).isRequired,
};

export default Evaluations;
