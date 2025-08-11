const sumProducts = (products) => {
  const itemsCounter = products.reduce((accumulator, product) => 
    accumulator + product.quantity
  , 0);
  const total = products
    .reduce((accumulator, product) => 
      accumulator + product.price * product.quantity
    , 0)
  return { itemsCounter, total };
};

export { sumProducts };
