import { useNewsCardStyles } from "./news-card.style";
const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }
  return text;
};
const NewsCardComponent = ({img,title,description}) => {
    const classes = useNewsCardStyles();
    const truncatedTitle = truncateText(title,60);
    const truncatedDescription = truncateText(description, 80);

    return (
      <div className={classes.newsCard}>
        <img src={img} alt='' />
        <div className={classes.cardBody}>
          <p className={classes.blogTitle}>{truncatedTitle}</p>
          <p className={classes.blogDescription}>{truncatedDescription}</p>
          <span className={classes.newsDate}>10.01.2024 </span>
        </div>
      </div>
    );
}

export default NewsCardComponent;