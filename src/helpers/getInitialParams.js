const getInitialParams = (searchParams) => {
  //get URL queries and set them in the state query
  const query = {};
  const search = searchParams.get("search");
  if (search) query.search = search;
  const category = searchParams.get("category");
  if (category) query.category = category;
  return query;
};

export { getInitialParams };
