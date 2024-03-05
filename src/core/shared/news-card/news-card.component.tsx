import { Link } from 'react-router-dom';
import { useNewsCardStyles } from './news-card.style';

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }
  return text;
};
const NewsCardComponent = ({ img, title, description, date }) => {
  const classes = useNewsCardStyles();
  const truncatedTitle = truncateText(title, 60);
  const truncatedDescription = truncateText(description, 80);

  return (
    <div className={classes.newsCard}>
      <Link to='#'>
        <img src={img} alt='' />
        <div className={classes.cardBody}>
          <p className={classes.blogTitle}>{truncatedTitle}</p>
          <p className={classes.blogDescription}>{truncatedDescription}</p>
          <span className={classes.newsDate}>{date}</span>
        </div>
      </Link>
    </div>
  );
};

export default NewsCardComponent;
