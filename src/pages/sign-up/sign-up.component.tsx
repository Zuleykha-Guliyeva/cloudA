import { useSignUpStyles } from './sign-up.style';
import { Link, useNavigate } from 'react-router-dom';
import signBack1 from 'assets/images/statics/sign-in/sign-back1.png';
import signBack2 from 'assets/images/statics/sign-in/sign-back2.png';
import { Routes } from 'router/routes';
import { Button, Form, Input } from 'antd';
import useLocalization from 'assets/lang';
import { useMemo } from 'react';
import { ISignUpFormValues } from './sign-up';
import backIcon from 'assets/images/statics/back.png';
import { User } from 'assets/images/icons/user';
import { useSignUp } from './actions/sign-up.mutation';
const SignUPComponent = () => {
  const classes = useSignUpStyles();
  const translate = useLocalization();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const initialValues: ISignUpFormValues = {
    name: '',
    surname: '',
    country: '',
    city: '',
    address: '',
    liveAddress: '',
    company: '',
    phone: '',
    email: '',
    password: '',
  };
  const rules = useMemo(
    () => ({
      name: [
        {
          required: true,
          message: translate('input_required'),
        },
      ],
      surname: [
        {
          required: true,
          message: translate('input_required'),
        },
      ],
      country: [
        {
          required: true,
          message: translate('input_required'),
        },
      ],
      city: [
        {
          required: true,
          message: translate('input_required'),
        },
      ],
      address: [
        {
          required: true,
          message: translate('input_required'),
        },
      ],
      liveAddress: [
        {
          required: true,
          message: translate('input_required'),
        },
      ],
      company: [
        {
          required: true,
          message: translate('input_required'),
        },
      ],
      phone: [
        {
          required: true,
          message: translate('input_required'),
        },
      ],
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
  const signUpUser = useSignUp();
  const onSubmit = (values: ISignUpFormValues) => {
    signUpUser.mutate(values);
  };
  return (
    <div className='container pt-150'>
      <div className={classes.signUpPage}>
        <div className={classes.backIcon} onClick={goBack}>
          <img src={backIcon} alt='' />
          <span className={classes.backSpan}>Back</span>
        </div>
        <div className={classes.signUpPagePadding}>
          <div className={classes.signBackImg1}>
            <img src={signBack1} alt='' />
          </div>
          <div className={classes.signBackImg2}>
            <img src={signBack2} alt='' />
          </div>

          <div className={classes.tabMenuSignUp}>
            <div className='row align-center'>
              <div className='col-6 p-0 text-center d-flex justify-center align-center'>
                <User />
                <Link to={Routes.signup}>Şəxsi</Link>
              </div>
              <div className='col-6 p-0 text-center d-flex justify-center align-center'>
                <User />
                <Link to={Routes.signup}>Tələbə</Link>
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
              <div className='col-lg-6'>
                <Form.Item rules={rules.name} name='name'>
                  <Input placeholder={translate('name')} />
                </Form.Item>
              </div>
              <div className='col-lg-6'>
                <Form.Item rules={rules.surname} name='surname'>
                  <Input placeholder={translate('surname')} />
                </Form.Item>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6'>
                <Form.Item rules={rules.country} name='country'>
                  <Input placeholder={translate('country')} />
                </Form.Item>
              </div>
              <div className='col-lg-6'>
                <Form.Item rules={rules.city} name='city'>
                  <Input placeholder={translate('city')} />
                </Form.Item>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12'>
                <Form.Item rules={rules.address} name='address'>
                  <Input placeholder={translate('address')} />
                </Form.Item>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12'>
                <Form.Item rules={rules.liveAddress} name='liveAddress'>
                  <Input placeholder={translate('liveAddress')} />
                </Form.Item>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12'>
                <Form.Item rules={rules.company} name='company'>
                  <Input placeholder={translate('company')} />
                </Form.Item>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12'>
                <Form.Item rules={rules.phone} name='phone'>
                  <Input placeholder={translate('phone')} />
                </Form.Item>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12'>
                <Form.Item rules={rules.email} name='email'>
                  <Input placeholder={translate('email')} />
                </Form.Item>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6'>
                <Form.Item rules={rules.password} name='password'>
                  <Input placeholder={translate('password')} />
                </Form.Item>
              </div>
              <div className='col-lg-6'>
                <Form.Item >
                  <Input placeholder={translate('repeatPassword')} />
                </Form.Item>
              </div>
            </div>
            <div className='row mt-20'>
              <div className='col-lg-12'>
                <Button type='primary' htmlType='submit'>
                  {translate('continue')}
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default SignUPComponent;
