import useLocalization from 'assets/lang';
import BlueBoxComponent from 'core/shared/blue-box/blue-box.component';
import { useResetPasswordSyles } from './reset-password.style';
import { Input } from 'antd';
import { Routes } from 'router/routes';
import { Link } from 'react-router-dom';

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
            <Link
              className={classes.emailSendButton}
              to={Routes.resetpasswordcode}
            >
              <span>{translate('send')}</span>
            </Link>
          </div>
        </div>
      </div>
    </BlueBoxComponent>
  );
};
export default ResetPasswordComponent;
