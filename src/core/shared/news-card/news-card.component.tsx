import { useNewsCardStyles } from "./news-card.style";

const NewsCardCommponent = ({img}) => {
    const classes = useNewsCardStyles();
    return (
      <div className={classes.newsCard}>
        <img src={img} alt='' />
        <div className={classes.cardBody}>
          <p className={classes.blogTitle}>
            "AzInTelecom" LLC provides high-quality public cloud services.
          </p>
          <p className={classes.blogDescription}>
            "AzInTelecom" LLC provides high-quality public cloud services for
            small and medium-sized.
          </p>
          <span className={classes.newsDate}>10.01.2024 </span>
        </div>
      </div>
    );
}

export default NewsCardCommponent;