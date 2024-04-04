import { Button, Form, Input } from "antd";
import useLocalization from "assets/lang";
import { useNewPasswordStyles } from "./new-password.style";
import signBack1 from 'assets/images/statics/sign-in/sign-back1.png';
import signBack2 from 'assets/images/statics/sign-in/sign-back2.png';
import { useMemo } from "react";
import backIcon from 'assets/images/statics/back.png';
import { useNavigate } from "react-router-dom";

const NewPasswordComponent = () => {
  const translate = useLocalization();
  const classes = useNewPasswordStyles();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const initialValues = {
    password: '',
  };
  const rules = useMemo(
    () => ({
      password: [
        {
          required: true,
          message: translate('input_required'),
        },
      ],
    }),
    [translate]
  );
  return (
    <div className='container pt-150'>
      <div className={classes.signInPage}>
        <div className={classes.backIcon} onClick={goBack}>
          <img src={backIcon} alt='' />
          <span className={classes.backSpan}>{translate('back')}</span>
        </div>
        <div className={classes.signBackImg1}>
          <img src={signBack1} alt='' />
        </div>
        <div className={classes.signBackImg2}>
          <img src={signBack2} alt='' />
        </div>
        <div className={classes.newPasswordTitle}>
          <div className='row'>
            <div className='col-12'>
              <p>New password</p>
            </div>
          </div>
        </div>
        <Form
          name='basic'
          initialValues={initialValues}
          // onFinish={onSubmit}
          layout='vertical'
        >
          <div className='row'>
            <div className='col-lg-12'>
              <Form.Item
                rules={rules.password}
                name='password'
                className={classes.formItemPassword}
              >
                <Input placeholder={translate('password')} />
              </Form.Item>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <Form.Item className={classes.formItemPassword}>
                <Input placeholder={translate('confirmpassword')} />
              </Form.Item>
            </div>
          </div>
          <div className='row mt-28'>
            <div className='col-lg-12'>
              <Button type='primary' htmlType='submit'>
                {translate('signin')}
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default NewPasswordComponent;