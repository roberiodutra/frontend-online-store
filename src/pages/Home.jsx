import React from 'react';
import { getCategories } from '../services/api';
import Category from '../component/Category';

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
    /* this.setState({ categories: name }); */
    /* return name; */
  }

  render() {
    const { categories } = this.state;
    console.log(categories);
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
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
