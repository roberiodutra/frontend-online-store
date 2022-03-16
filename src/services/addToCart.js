export default function addToCart(product) {
  let products = JSON.parse(localStorage.getItem('cartItems') || '[]');
  const newProduct = { product, title: product.title };
  products = [...products, newProduct];
  localStorage.setItem('cartItems', JSON.stringify(products));
}
