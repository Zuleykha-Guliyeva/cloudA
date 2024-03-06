import { Link, useLocation } from 'react-router-dom';
import { useSearchResultStyles } from './search-result.style';
import searchIcon from 'assets/images/icons/search/search-icon.png';
import SearchResultItemComponent from './components/search-result-item.component';
const SearchResultComponent = () => {
  const classes = useSearchResultStyles();
  const location = useLocation();
  const searchResults = location.state?.searchResults;
  console.log(searchResults);
  
  return (
    <section className={classes.searchResultPage}>
      <div className='container'>
        <p className={classes.searchResultPageTitle}>Search result</p>
        <div className={classes.searchResultBox}>
          <div className='row'>
            <div className='col-12'>
              <div className={classes.searchFoundRow}>
                <img src={searchIcon} alt='' />
                <span className={classes.searchResultFound}>
                  7 result found:
                </span>
                <Link className={classes.canPay} to=''>
                  “How can pay?”
                </Link>
              </div>
            </div>
          </div>
          <div className='row'>
            {searchResults &&
              searchResults.map((searchResult) => (
                <SearchResultItemComponent searchResult={searchResult} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default SearchResultComponent;
