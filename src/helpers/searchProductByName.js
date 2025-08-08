const searchProductByName = (products, searchName) => {
  // return if search name is empty
  if (!searchName) return products;
  const result = products.filter((p) =>
    p.title.trim().toLowerCase().includes(searchName)
  );
  return result;
};

export { searchProductByName };
