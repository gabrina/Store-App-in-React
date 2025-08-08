const searchProductByCategory = (products, category) => {
  // if (category === "all") return products;

  // in the case that category is set as AllowSharedBuffer, after it was sth else;
  // because when this happens, searching by category is executed and since we dont
  // have category ==all, we have to manage the situation
  if (!category) return products;
  const result = products.filter((p) => p.category === category);
  return result;
};

export { searchProductByCategory };
