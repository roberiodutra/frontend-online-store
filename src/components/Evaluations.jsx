import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Evaluations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      evaluations: [],
    };
  }

    componentDidMount = () => {
      this.getRatings();
    }

    getRatings = () => {
      const { id } = this.props;
      const ratings = JSON.parse(localStorage.getItem('evaluations') || '[]');
      const isRate = ratings.filter((storage) => storage.id === id);
      this.setState({ evaluations: isRate });
    }

    render() {
      const { evaluations } = this.state;

      return (
        <div>
          {evaluations.map((storage, i) => (
            <div key={ i }>
              <p>{ `${storage.rateStorage.email}` }</p>
              <p>{ storage.rateStorage.rate }</p>
              <p>{ storage.rateStorage.comment }</p>
            </div>
          ))}
        </div>
      );
    }
}

Evaluations.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Evaluations;
