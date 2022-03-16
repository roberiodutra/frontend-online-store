import React from 'react';
import * as api from '../services/api';
import Category from '../components/Category';
import SearchBar from '../components/SearchBar';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      searchValue: '',
      arrProdutos: [],
      selectedCat: '',
    };
  }

  componentDidMount() {
    this.categories();
  }

  pegaValorDaPesquisa = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  categories = async () => {
    this.setState({ categories: await api.getCategories() });
  }

  handleClick = async () => {
    const { selectedCat } = this.state;
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${selectedCat}`);
    const { results } = await response.json();
    this.setState({ arrProdutos: results });
  }

  handleChange = ({ target: { value } }) => {
    this.setState({
      selectedCat: value,
    }, () => { this.handleClick(); });
  }

  render() {
    const {
      categories,
      searchValue,
      arrProdutos,
      selectedCat } = this.state;
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <SearchBar
          searchValue={ searchValue }
          arrProdutos={ arrProdutos }
          pegaValorDaPesquisa={ this.pegaValorDaPesquisa }
          pesquisar={ this.handleClick }
        />
        <section>
          { categories.map((obj) => (
            <Category
              key={ obj.id }
              id={ obj.id }
              name={ obj.name }
              selectedCat={ selectedCat }
              searchFunction={ this.handleChange }
            />)) }
        </section>
      </div>
    );
  }
}

export default Home;
