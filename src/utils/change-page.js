export const changePage = (category, props) => {
  localStorage.setItem('category', category);
  props.history.push({
    pathname: `/${category}`,
    search: '?page=1'
  });
}