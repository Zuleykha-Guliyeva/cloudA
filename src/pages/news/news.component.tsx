import { Form, Input, Pagination } from 'antd';
import { useNewsStyles } from './news.style';
import searchBlue from 'assets/images/icons/news/search-blue-icon.svg';
import { SearchIcon } from 'assets/images/icons/news/search';
import NewsCardComponent from 'core/shared/news-card/news-card.component';
import newsImg1 from 'assets/images/statics/news/news1.png';

const NewsComponent = () => {
  const classes = useNewsStyles();
  return (
    <div className={classes.newsSec}>
      <div className='container'>
        <div className='row align-center mb-63'>
          <div className='col-md-5'>
            <p className={classes.blogsTitle}>News and blog</p>
          </div>
          <div className='col-md-7'>
            <Form>
              <SearchIcon />
              <Input
                placeholder='What news are you looking for?'
                type='text'
              ></Input>
              <img src={searchBlue} alt='' />
            </Form>
            <Form className={classes.searchForDate}>
              <div className={classes.inputDateGroup}>
                <Input
                  className={classes.fromDate}
                  placeholder='What news are you looking for?'
                  type='text'
                ></Input>
                <Input
                  className={classes.toDate}
                  placeholder='What news are you looking for?'
                  type='text'
                ></Input>
              </div>
              <div className={classes.inputDateGroup}>
                <Input
                  placeholder='What news are you looking for?'
                  type='reset'
                ></Input>
                <Input
                  placeholder='What news are you looking for?'
                  type='submit'
                ></Input>
              </div>
            </Form>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <NewsCardComponent img={newsImg1}></NewsCardComponent>
          </div>
          <div className='col-md-4'>
            <NewsCardComponent img={newsImg1}></NewsCardComponent>
          </div>
          <div className='col-md-4'>
            <NewsCardComponent img={newsImg1}></NewsCardComponent>
          </div>
          <div className='col-md-4'>
            <NewsCardComponent img={newsImg1}></NewsCardComponent>
          </div>
          <div className='col-md-4'>
            <NewsCardComponent img={newsImg1}></NewsCardComponent>
          </div>
          <div className='col-md-4'>
            <NewsCardComponent img={newsImg1}></NewsCardComponent>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className={classes.pagination}>
              <Pagination defaultCurrent={1} total={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsComponent;
