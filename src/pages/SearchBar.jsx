import React, { Component } from 'react';
import propTypes from 'prop-types';
import * as api from '../services/api';
import ProdutosCard from '../components/ProdutosCard';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
      arrProdutos: [],
    };

    this.pegaValorDaPesquisa = this.pegaValorDaPesquisa.bind(this);
    this.pesquisar = this.pesquisar.bind(this);
  }

  pegaValorDaPesquisa({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async pesquisar() {
    const { searchValue } = this.state;
    const { categories } = this.props;
    const arrProdutos = await api.getProductsFromCategoryAndQuery(
      categories, searchValue,
    );
    this.setState({ arrProdutos: arrProdutos.results });
  }

  render() {
    const { searchValue, arrProdutos } = this.state;
    return (
      <div>
        <label htmlFor="searchValue">
          <input
            name="searchValue"
            type="text"
            onChange={ this.pegaValorDaPesquisa }
            value={ searchValue }
            data-testid="query-input"
          />
        </label>
        <button
          type="button"
          onClick={ this.pesquisar }
          data-testid="query-button"
        >
          Pesquisar
        </button>
        <div>
          {arrProdutos.map((item) => (
            <ProdutosCard item={ item.id } key={ item.id } />
          ))}
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  categories: propTypes.string,
}.isRequired;

export default SearchBar;
