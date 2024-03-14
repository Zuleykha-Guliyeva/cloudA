import { useNewsSingleStyles } from './news-single.style';
import backIcon from 'assets/images/statics/back.png';
import newsPng from 'assets/images/statics/news/news-single.png';
import { useParams } from 'react-router-dom';
import { useNewsSingle } from './actions/news-single.query';

const NewsSingleComponent = () => {
  const classes = useNewsSingleStyles();
  const {id} = useParams();
  const stringId : string = id || '';
  const newsId = parseInt(stringId);
  const { data } = useNewsSingle(newsId);

  return (
    <div className={classes.singleNews}>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className={classes.backIcon}>
              <img src={backIcon} alt='' />
              <span className={classes.backSpan}> Back</span>
            </div>
          </div>
        </div>
        <div>
          <p className={classes.newsTitle}>{data?.title}</p>
          <span className={classes.newsDate}>{data?.date}</span>
        </div>
        <div className={classes.newImg}>
          <img src={newsPng} alt='' />
        </div>
        <p className={classes.newsDescription}>{data?.description}</p>
      </div>
    </div>
  );
};

export default NewsSingleComponent;
