import { Button, Form, Input } from 'antd';
import { useSignInStyles } from './sign-in.style';
import { useCallback, useMemo, useState } from 'react';
import useLocalization from 'assets/lang';
import { ISignInFormValues } from './sign-in';
import { Link, NavLink } from 'react-router-dom';
import eyeIcon from 'assets/images/statics/eye.svg';
import invisibleEyeIcon from 'assets/images/statics/invisible-eye.svg';
import { Routes } from 'router/routes';
import { useSignIn } from './actions/sign-in.mutation';
import BlueBoxComponent from 'core/shared/blue-box/blue-box.component';

const SignInComponent = () => {
  const classes = useSignInStyles();
  const translate = useLocalization();
  const { mutate } = useSignIn();
  const initialValues: ISignInFormValues = {
    email: '',
    password: '',
  };
  const rules = useMemo(
    () => ({
      email: [
        {
          required: true,
          message: translate('input_required'),
        },
      ],
      password: [
        {
          required: true,
          message: translate('input_required'),
        },
      ],
    }),
    [translate]
  );
  const onSubmit = useCallback(
    (values: ISignInFormValues) => {
      mutate(values);
    },
    [mutate]
  );
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <BlueBoxComponent text=''>
      <div className={classes.signInSection}>
        <div className={classes.tabMenuSignIn}>
          <div className='row'>
            <div className='col-6 p-0 text-center'>
              <NavLink to={Routes.signin}>Sing In</NavLink>
            </div>
            <div className='col-6 p-0 text-center'>
              <NavLink to={Routes.signup}>Sign Up</NavLink>
            </div>
          </div>
        </div>
        <Form
          name='basic'
          initialValues={initialValues}
          onFinish={onSubmit}
          layout='vertical'
        >
          <div className='row'>
            <div className='col-lg-12'>
              <Form.Item
                rules={rules.email}
                name='email'
                className={classes.formItemEmail}
              >
                <Input placeholder={translate('email')} />
              </Form.Item>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <Form.Item
                rules={rules.password}
                name='password'
                className={classes.formItemPassword}
              >
                <Input.Password
                  className={classes.passwordInput}
                  placeholder={translate('password')}
                  iconRender={(visible) =>
                    visible ? (
                      <img
                        src={eyeIcon}
                        alt=''
                        onClick={togglePasswordVisibility}
                      />
                    ) : (
                      <img
                        src={invisibleEyeIcon}
                        alt=''
                        onClick={togglePasswordVisibility}
                      />
                    )
                  }
                />
              </Form.Item>
            </div>
          </div>
          <div className='row text-right'>
            <div className='col-12'>
              <Link to={Routes.resetpassword}>
                <span className='pr-20'>{translate('forgetPass')}</span>
              </Link>
            </div>
          </div>
          <div className='row mt-44'>
            <div className='col-lg-12'>
              <Button type='primary' htmlType='submit'>
                {translate('signin')}
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </BlueBoxComponent>
  );
};

export default SignInComponent;
