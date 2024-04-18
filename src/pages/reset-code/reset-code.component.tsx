import BlueBoxComponent from 'core/shared/blue-box/blue-box.component';
import { useResetCodeStyles } from './reset-code.style';
import useLocalization from 'assets/lang';
import { Routes } from 'router/routes';
import { Button } from 'antd';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const ResetCodeComponent = () => {
  const classes = useResetCodeStyles();
  const translate = useLocalization();
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate(`${Routes.newpassword}`);
  }, []);
  return (
    <BlueBoxComponent text={translate('yourcode')}>
      <div className={classes.resetYourCodeSection}>
        <div className={classes.otpCodeDesc}>
          <p>We send OTP code to your e-mail adres</p>
          <p>zergerliturkay@gmail.com</p>
        </div>
        <div className={classes.yourcodes}>
          <div className='row pr-15 mt-54'>
            <div className='col-2'>
              <div className={classes.yourCodeSpan}>
                <span>0</span>
              </div>
            </div>
            <div className='col-2'>
              <div className={classes.yourCodeSpan}>
                <span>1</span>
              </div>
            </div>
            <div className='col-2'>
              <div className={classes.yourCodeSpan}>
                <span>2</span>
              </div>
            </div>
            <div className='col-2'>
              <div className={classes.yourCodeSpan}>
                <span>3</span>
              </div>
            </div>
            <div className='col-2'>
              <div className={classes.yourCodeSpan}>
                <span>4</span>
              </div>
            </div>
            <div className='col-2'>
              <div className={classes.yourCodeSpan}>
                <span>5</span>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <Button onClick={handleClick} className={classes.verify}>
              {translate('verify')}
            </Button>
          </div>
        </div>
      </div>
    </BlueBoxComponent>
  );
};
export default ResetCodeComponent;
