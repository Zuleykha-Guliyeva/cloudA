import { Link } from "react-router-dom";
import { useSearchResultItemStyles } from "./search-result-item.style";
import { SearchResultLeftArrow } from 'assets/images/icons/arrows';
import { Routes } from "router/routes";

const SearchResultItemComponent = ({searchResult}) => {
  const classes = useSearchResultItemStyles();
  console.log(searchResult);
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  };
  const truncatedTitle = truncateText(searchResult.title, 60);
  const truncatedDescription = truncateText(searchResult?.description, 146);
  return (
    <div className='col-12'>
      <div className={classes.searchResultRow}>
        <div className='d-flex'>
          <span className={classes.newsResultTitle}> {truncatedTitle} </span>
          <Link to={`${Routes.newsdetail}/${searchResult?.id}`}>
            <SearchResultLeftArrow />
          </Link>
        </div>
        <p className={classes.newsResultDesc}> {truncatedDescription} </p>
      </div>
    </div>
  );
};
export default SearchResultItemComponent;