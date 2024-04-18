import { useAddCardStyles } from './add-card.style';
import info from 'assets/images/statics/info.svg';
import { Routes } from 'router/routes';
import useLocalization from 'assets/lang';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from 'core/helpers/get-token';
import { setUser } from 'store/store.reducer';
import { IState } from 'store/store';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
const AddCardComponent = () => {
  const classes = useAddCardStyles();
  const translate = useLocalization();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = getToken();
  dispatch(setUser(token));
  const user = useSelector((state: IState) => state.user);
  const { email, name, surname } = user;
  const handleClick = useCallback(() => {
    navigate(Routes.carddetail);
  },[navigate]);
  return (
    <div className={classes.addCardPage}>
      <div className='container'>
        <div className={classes.addCardBox}>
          <div className={classes.infoIcon}>
            <img src={info} alt='' />
          </div>
          <div className={classes.userTitle}>
            <p>
              Hörmətli,
              <span>{`${name} ${surname}`}</span>
            </p>
          </div>
          <div className={classes.userEmailDesc}>
            <p>
              <span>{email}</span> e-maili ilə etdiyiniz qeydiyyatınızı
              tamamlamaq üçün zəhmət olmasa ödəniş məlumatlarını daxil edəsiniz.
            </p>
          </div>
          <div>
            <Button onClick={handleClick} className={classes.aboutBtn}>
              {translate('addcard')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddCardComponent;
