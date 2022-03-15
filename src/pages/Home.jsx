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
    };
  }

  componentDidMount() {
    this.categories();
  }

  pegaValorDaPesquisa = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  pesquisar = async () => {
    const { searchValue, categories } = this.state;
    const arrProdutos = await api.getProductsFromCategoryAndQuery(
      categories, searchValue,
    );
    this.setState({ arrProdutos: arrProdutos.results });
    console.log(arrProdutos);
  }

  categories = async () => {
    await api.getCategories()
      .then((cat) => this.setState({ categories: cat }));
  }

  handleChange = async ({ target }) => {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${target.id}`);
    const { results } = await response.json();
    this.setState({ arrProdutos: results });
  }

  render() {
    const {
      categories,
      searchValue,
      arrProdutos } = this.state;
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <SearchBar
          searchValue={ searchValue }
          arrProdutos={ arrProdutos }
          pegaValorDaPesquisa={ this.pegaValorDaPesquisa }
          pesquisar={ this.pesquisar }
        />
        <section>
          { categories.map((obj) => (
            <Category
              key={ obj.id }
              category={ obj }
              searchFunction={ this.handleChange }
            />)) }
        </section>
      </div>
    );
  }
}

export default Home;
