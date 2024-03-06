import { useSearchResultItemStyles } from "./search-result-item.style";
import { SearchResultLeftArrow } from 'assets/images/icons/arrows';

const SearchResultItemComponent = ({searchResult}) => {
  const classes = useSearchResultItemStyles();
  console.log(searchResult);
  
  return (
    <div className='col-12'>
      <div className={classes.searchResultRow}>
        <div className='d-flex'>
          <span className={classes.newsResultTitle}>{searchResult.title}</span>
          <SearchResultLeftArrow />
        </div>
        <p className={classes.newsResultDesc}>{searchResult?.description}</p>
      </div>
    </div>
  );
};
export default SearchResultItemComponent;