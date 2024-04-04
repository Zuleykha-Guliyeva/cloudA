import { useSignUpStyles } from './sign-up.style';
import { Button, Form, Input } from 'antd';
import useLocalization from 'assets/lang';
import { useMemo, useState } from 'react';
import { IFormValues } from './sign-up';
import { useSignUp } from './actions/sign-up.mutation';
import { User } from 'assets/images/icons/user';
import BlueBoxComponent from 'core/shared/blue-box/blue-box.component';
const SignUPComponent = () => {
  const classes = useSignUpStyles();
  const translate = useLocalization();
  const initialValues: IFormValues = {
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
  const onSubmit = (values: IFormValues) => {
    const mutateData = { ...values, catUser: categoryUser };
    signUpUser.mutate(mutateData);
  };
  const [categoryUser,setCategoryUser] = useState('personal');
  return (
    <BlueBoxComponent>
      <div className={classes.tabSignUp}>
        <div className={classes.signUpTabs}>
          <div className='row'>
            <div className='col-12 d-flex justify-center'>
              <span
                onClick={() => setCategoryUser('personal')}
                className={
                  categoryUser === 'personal' ? classes.activeTabs : ''
                }
              >
                {categoryUser === 'personal' ? <User /> : ''}
                {translate('personal')}
              </span>
              <span
                onClick={() => setCategoryUser('student')}
                className={categoryUser === 'student' ? classes.activeTabs : ''}
              >
                {categoryUser === 'student' ? <User /> : ''}
                {translate('student')}
              </span>
            </div>
          </div>
        </div>
        <div className='row align-center justify-between'>
          <div className='col-12 '>
            {categoryUser === 'personal' ? (
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
                    <Form.Item>
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
            ) : (
              <>student</>
            )}
          </div>
        </div>
      </div>
    </BlueBoxComponent>
  );
};
export default SignUPComponent;
