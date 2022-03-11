import React, { Component } from 'react';
import propTypes from 'prop-types';
import ProdutosCard from './ProdutosCard';

class SearchBar extends Component {
  render() {
    const { searchValue, arrProdutos, pegaValorDaPesquisa, pesquisar } = this.props;
    return (
      <div>
        <label htmlFor="searchValue">
          <input
            name="searchValue"
            type="text"
            value={ searchValue }
            onChange={ pegaValorDaPesquisa }
            data-testid="query-input"
          />
        </label>
        <button
          type="button"
          onClick={ pesquisar }
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
