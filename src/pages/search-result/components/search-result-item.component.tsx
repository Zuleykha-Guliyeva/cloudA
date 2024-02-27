import { useSearchResultItemStyles } from "./search-result-item.style";
import { SearchResultLeftArrow } from 'assets/images/icons/arrows';

const SearchResultItemComponent = () => {
    const classes = useSearchResultItemStyles();
return (
  <div className='col-12'>
    <div className={classes.searchResultRow}>
      <div className='d-flex'>
        <span className={classes.newsResultTitle}>News and blogs</span>
        <SearchResultLeftArrow />
      </div>
      <p className={classes.newsResultDesc}>
        Pay Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of and scrambled a when
        ...
      </p>
    </div>
  </div>
);
}
export default SearchResultItemComponent;