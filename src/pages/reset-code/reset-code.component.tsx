import BlueBoxComponent from 'core/shared/blue-box/blue-box.component';
import { useResetCodeStyles } from './reset-code.style';
import useLocalization from 'assets/lang';
import { Routes } from 'router/routes';
import ButtonComponent from 'core/shared/button/button.component';

const ResetCodeComponent = () => {
  const classes = useResetCodeStyles();
  const translate = useLocalization();
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
            <ButtonComponent
              text={translate('verify')}
              className='verify'
              url={Routes.newpassword}
            />
          </div>
        </div>
      </div>
    </BlueBoxComponent>
  );
};
export default ResetCodeComponent;
