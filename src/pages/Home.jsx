import React from 'react';
import { getCategories } from '../services/api';
import Category from '../components/Category';
import SearchBar from '../components/SearchBar';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.categories();
  }

  categories = async () => {
    await getCategories()
      .then((cat) => this.setState({ categories: cat }));
  }

  render() {
    const { categories } = this.state;
    console.log(categories);
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <SearchBar />
        <section>
          { categories.map(({ id, name }) => (
            <Category
              key={ id }
              category={ name }
            />)) }
        </section>
      </div>
    );
  }
}

export default Home;
