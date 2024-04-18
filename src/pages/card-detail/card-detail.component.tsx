import { Button, DatePicker, Form, Input } from 'antd';
import useLocalization from 'assets/lang';
import BlueBoxComponent from 'core/shared/blue-box/blue-box.component';
import { useMemo } from 'react';
import { ICardDetail } from './card-detail';
import { useCardDetailStyles } from './card-detail.styles';
import { useCardDetail } from './actions/card-detail.mutation';

const CardDetailComponent = () => {
  const classes = useCardDetailStyles();
  const translate = useLocalization();
  const rules = useMemo(
    () => ({
      fullName: [
        {
          required: true,
          message: translate('input_required'),
        },
      ],
      cardNumber: [
        {
          required: true,
          message: translate('input_required'),
        },
      ],
      cardDate: [
        {
          required: true,
          message: translate('input_required'),
        },
      ],
      cardCvv: [
        {
          required: true,
          message: translate('input_required'),
        },
      ],
    }),
    [translate]
  );
  const initialValues: ICardDetail = {
    fullName: '',
    cardNo: '',
    cardDate: '',
    cvv: '',
  };
  const cardDetail = useCardDetail();
  const onSubmit = (values: ICardDetail) => {
    cardDetail.mutate(values);
  };
  return (
    <BlueBoxComponent text={translate('craddetail')}>
      <div className='mt-44'>
        <Form
          name='basic' 
          initialValues={initialValues}
          onFinish={onSubmit}
          layout='vertical'
        >
          <div className='row'>
            <div className='col-lg-12'>
              <Form.Item rules={rules.fullName} name='fullName'>
                <Input placeholder={translate('cardname')} />
              </Form.Item>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <Form.Item rules={rules.cardNumber} name='cardNo'>
                <Input placeholder={translate('cardnumber')} />
              </Form.Item>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-8 pr-0'>
              <Form.Item rules={rules.cardDate} name='cardDate'>
                <DatePicker
                  placeholder={translate('date')}
                  style={{ width: '100%' }}
                />
              </Form.Item>
            </div>
            <div className='col-lg-4 pl-18'>
              <Form.Item rules={rules.cardCvv} name='cvv'>
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
