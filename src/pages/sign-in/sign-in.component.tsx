import { Button, Form, Input } from 'antd';
import { useSignInStyles } from './sign-in.style';
import { useMemo } from 'react';
import useLocalization from 'assets/lang';
import { ISignInFormValues } from './sign-in';
import { Link } from 'react-router-dom';
import signBack1 from 'assets/images/statics/sign-in/sign-back1.png';
import signBack2 from 'assets/images/statics/sign-in/sign-back2.png';
import { Routes } from 'router/routes';

const SignInComponent = () => {
  const classes = useSignInStyles();
  const translate = useLocalization();
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
  const onSubmit = () => {};

  return (
    <div className='container pt-150'>
      <div className={classes.signInPage}>
        <div className={classes.signBackImg1}>
          <img src={signBack1} alt='' />
        </div>
        <div className={classes.signBackImg2}>
          <img src={signBack2} alt='' />
        </div>

        <div className={classes.tabMenuSignIn}>
          <div className='row'>
            <div className='col-6 p-0 text-center'>
              <Link to='#'>Sing In</Link>
            </div>
            <div className='col-6 p-0 text-center'>
              <Link to={Routes.signup}>Sign Up</Link>
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
              <Form.Item rules={rules.email} name='email'>
                <Input placeholder={translate('email')} />
              </Form.Item>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <Form.Item rules={rules.password} name='password'>
                <Input placeholder={translate('password')} />
              </Form.Item>
            </div>
          </div>
          <div className='row text-right'>
            <div className='col-12'>
              <span>Forget password?</span>
            </div>
          </div>
          <div className='row mt-20'>
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

export default SignInComponent;
