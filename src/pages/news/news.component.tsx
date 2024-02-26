import { Form, Input, Pagination } from 'antd';
import { useNewsStyles } from './news.style';
import searchBlue from 'assets/images/icons/news/search-blue-icon.svg';
import { SearchIcon } from 'assets/images/icons/news/search';
import NewsCardComponent from 'core/shared/news-card/news-card.component';
import newsImg1 from 'assets/images/statics/news/news1.png';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDateSearchBtn } from 'store/store.reducer';
import { IState } from 'store/store';

const NewsComponent = () => {
  const classes = useNewsStyles();
  const dispatch = useDispatch();
  const clickDateSearch = () => {
    dispatch(toggleDateSearchBtn());
  };
  const dateSearchForm = useSelector((state: IState) => state.dateSearchBtn);

  return (
    <div className={classes.newsSec}>
      <div className='container'>
        <div className='row align-center mb-63'>
          <div className='col-md-5'>
            <p className={classes.blogsTitle}>News and blog</p>
          </div>
          <div className='col-md-7'>
            <div className={classes.relativeBox}>
              <Form className={classes.searchForm}>
                <SearchIcon />
                <Input
                  placeholder='What news are you looking for?'
                  type='text'
                ></Input>
                <img src={searchBlue} alt='' onClick={clickDateSearch} />
              </Form>
              <Form
                className={
                  dateSearchForm ? classes.searchForDate : classes.searchDateNone
                }
              >
                <div className={classes.inputDateGroup}>
                  <Input
                    className={classes.fromDate}
                    placeholder='What news are you looking for?'
                    type='date'
                  ></Input>
                  <Input
                    className={classes.toDate}
                    placeholder='What news are you looking for?'
                    type='date'
                  ></Input>
                </div>
                <div className={classes.inputSubmitGroup}>
                  <Input
                    placeholder='What news are you looking for?'
                    type='reset'
                    value='Filteri sıfırla'
                  ></Input>
                  <Input
                    placeholder='What news are you looking for?'
                    type='submit'
                    value='Axtar'
                  ></Input>
                </div>
              </Form>
            </div>
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
