import React from 'react';
import SearchBar from './SearchBar';

class Search extends React.Component {
  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <SearchBar />
      </div>
    );
  }
}

export default Search;
