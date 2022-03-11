import React from 'react';
import * as api from '../services/api';
import Category from '../components/Category';
import SearchBar from '../components/SearchBar';
import Details from './Details';

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
  }

  categories = async () => {
    await api.getCategories()
      .then((cat) => this.setState({ categories: cat }));
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
          { categories.map(({ id, name }) => (
            <Category
              key={ id }
              category={ name }
            />)) }
        </section>
        {/* <section>
          {arrProdutos[0] !== ''
          && (arrProdutos.map((product) => (
            <Details
              key={ product.id }
              arrProdutos={ product }
            />
          )))}
        </section> */}
      </div>
    );
  }
}

export default Home;
