const idArr = [];
export function addToCart(id) {
  idArr.push(id);
  localStorage.setItem('cart', idArr);
}

export async function getsSavedItems() {
  const itemsObj = await Promise.all(idArr.map(async (id) => {
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const item = await response.json();
    return item;
  }));
  return itemsObj;
}
