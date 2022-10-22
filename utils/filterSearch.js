const filterSearch = ({ router, page, category, sort, search, gt, lt }) => {
  const path = router.pathname;
  const query = router.query;

  if (category) query.category = category;
  if (page) query.page = page;
  if (search) query.search = search;
  if (sort) query.sort = sort;
  if (lt) query.lt = lt;
  if (gt) query.gt = gt;

  router.push({
    pathname: path,
    query: query,
  });
};

export default filterSearch;
