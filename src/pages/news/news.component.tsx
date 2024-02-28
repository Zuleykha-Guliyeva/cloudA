import { Form, Input, Pagination } from 'antd';
import { useNewsStyles } from './news.style';
import searchBlue from 'assets/images/icons/news/search-blue-icon.svg';
import { SearchIcon } from 'assets/images/icons/news/search';
import NewsCardComponent from 'core/shared/news-card/news-card.component';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDateSearchBtn } from 'store/store.reducer';
import { IState } from 'store/store';
import { Routes } from 'router/routes';
import { useNews } from './actions/news.query';

const NewsComponent = () => {
  const classes = useNewsStyles();
  const dispatch = useDispatch();
  const clickDateSearch = () => {
    dispatch(toggleDateSearchBtn());
  };
  const {data} = useNews();
  console.log(data);
  
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
              <Form action={Routes.search} className={classes.searchForm}>
                <SearchIcon />
                <Input
                  placeholder='What news are you looking for?'
                  type='text'
                ></Input>
                <img src={searchBlue} alt='' onClick={clickDateSearch} />
              </Form>
              <Form
                className={
                  dateSearchForm
                    ? classes.searchForDate
                    : classes.searchDateNone
                }
              >
                <div className={classes.inputDateGroup}>
                  <Input className={classes.fromDate} type='date'></Input>
                  <Input className={classes.toDate} type='date'></Input>
                </div>
                <div className={classes.inputSubmitGroup}>
                  <Input type='reset' value='Filteri sıfırla'></Input>
                  <Input type='submit' value='Axtar'></Input>
                </div>
              </Form>
            </div>
          </div>
        </div>
        <div className='row'>
          {data &&
            data.map((blog) => (
              <div className='col-md-4'>
                <NewsCardComponent img={blog.urlToImage} title={blog.title} description={blog.description}></NewsCardComponent>
              </div>
            ))}
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
