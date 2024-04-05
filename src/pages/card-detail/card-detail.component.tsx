import { Button, Form, Input } from 'antd';
import useLocalization from 'assets/lang';
import BlueBoxComponent from 'core/shared/blue-box/blue-box.component';
import { useMemo } from 'react';
import { ICarDetail } from './card-detail';
import { useCardDetailStyles } from './card-detail.styles';

const CardDetailComponent = () => {
  const classes = useCardDetailStyles();
  const translate = useLocalization();
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
  const initialValues: ICarDetail = {
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
  const onSubmit = (values: ICarDetail) => {
    console.log(values);
  };
  return (
    <BlueBoxComponent text='craddetail'>
      <div className='mt-44'>
        <Form
          name='basic'
          initialValues={initialValues}
          onFinish={onSubmit}
          layout='vertical'
        >
          <div className='row'>
            <div className='col-lg-12'>
              <Form.Item rules={rules.address} name='address'>
                <Input placeholder={translate('cardname')} />
              </Form.Item>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <Form.Item rules={rules.liveAddress} name='liveAddress'>
                <Input placeholder={translate('cardnumber')} />
              </Form.Item>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-8 pr-0'>
              <Form.Item rules={rules.password} name='password'>
                <Input placeholder={translate('date')} />
              </Form.Item>
            </div>
            <div className='col-lg-4 pl-18'>
              <Form.Item>
                <Input placeholder='CVV' />
              </Form.Item>
            </div>
          </div>
          <div className='row mt-20'>
            <div className='col-lg-6 pr-11'>
              <Button htmlType='submit' className={classes.cancelBtn}>
                {translate('cancel')}
              </Button>
            </div>
            <div className='col-lg-6 pl-11'>
              <Button type='primary' htmlType='submit'>
                {translate('confirm')}
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </BlueBoxComponent>
  );
};
export default CardDetailComponent;
