import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSearchResultStyles } from './search-result.style';
import searchIcon from 'assets/images/icons/search/search-icon.png';
import SearchResultItemComponent from './components/search-result-item.component';
import noResult from 'assets/images/statics/no-result.png'
const SearchResultComponent = () => {
  const classes = useSearchResultStyles();
  const location = useLocation();
  const searchResults = location.state?.resultNews;
  console.log(searchResults);

  return (
    <section className={classes.searchResultPage}>
      <div className='container'>
        <p className={classes.searchResultPageTitle}>Search result</p>
        <div className={classes.searchResultBox}>
          {searchResults != '' ? (
            <>
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
                {searchResults.map((searchResult, index) => (
                  <div key={index} className='col-12'>
                    <SearchResultItemComponent searchResult={searchResult} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className={classes.noResult}>
              <img src={noResult} alt='' />
              <p>No results were found for your search</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchResultComponent;
