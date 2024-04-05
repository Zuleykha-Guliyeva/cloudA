import { Button, Form, Input } from 'antd';
import useLocalization from 'assets/lang';
import { useNewPasswordStyles } from './new-password.style';
import { useMemo } from 'react';
import BlueBoxComponent from 'core/shared/blue-box/blue-box.component';

const NewPasswordComponent = () => {
  const translate = useLocalization();
  const classes = useNewPasswordStyles();
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
    <BlueBoxComponent text={translate('newpassword')}>
      <div className={classes.newPassSection}>
        <Form
          name='basic'
          initialValues={initialValues}
          // onFinish={onSubmit}
          layout='vertical'
        >
          <div className='row mt-44'>
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
                {translate('verify')}
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </BlueBoxComponent>
  );
};

export default NewPasswordComponent;
