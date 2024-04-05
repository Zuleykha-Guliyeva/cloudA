import useLocalization from 'assets/lang';
import BlueBoxComponent from 'core/shared/blue-box/blue-box.component';
import { useResetPasswordSyles } from './reset-password.style';
import { Input } from 'antd';
import ButtonComponent from 'core/shared/button/button.component';
import { Routes } from 'router/routes';

const ResetPasswordComponent = () => {
  const translate = useLocalization();
  const classes = useResetPasswordSyles();
  return (
    <BlueBoxComponent text={translate('resetpassword')}>
      <div className={classes.resetPassSection}>
        <p className={classes.resetPassDesc}>
          Enter your registered email below to receive password reset
          instructions
        </p>
        <div className={classes.otpEmailCodeInput}>
          <Input placeholder={translate('email')} />
        </div>
        <div className='row'>
          <div className='col-lg-12'>
            <ButtonComponent
              text={translate('send')}
              className='verify'
              url={Routes.resetpasswordcode}
            />
          </div>
        </div>
      </div>
    </BlueBoxComponent>
  );
};
export default ResetPasswordComponent;
