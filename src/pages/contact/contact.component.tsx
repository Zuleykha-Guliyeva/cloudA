import { NavLink } from 'react-router-dom';
import { useContactStyles } from './contact.style';
import { UserTag, Call, Message, Location } from 'assets/images/icons/contact';
import emailPng from 'assets/images/icons/contactBack/email.png';
import formBack from 'assets/images/icons/contactBack/formBack.png';
import {
  Facebook,
  Instagram,
  Tweet,
  Linkin,
  Youtube,
} from 'assets/images/icons/sosial';
import { Button, Form, Input } from 'antd';
import useLocalization from 'assets/lang';
import { useMemo } from 'react';
import { IFormValues } from './contact';
// import { useContact } from './actions/contact.query';

const ContactComponent = () => {
  const classes = useContactStyles();
  const translate = useLocalization();
  const initialValues: IFormValues = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    content: '',
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
      email: [
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
      content: [
        {
          required: true,
          message: translate('input_required'),
        },
      ],
    }),
    [translate]
  );
  const onSubmit = () => {

  }
  return (
    <div className={classes.contactPage}>
      <section className={classes.infoContactSec}>
        <div className='container'>
          <div className='row align-center'>
            <div className='col-md-6 pl-44'>
              <div className={classes.infoContact}>
                <h1 className={classes.contactTitle}>Our contacts</h1>
                <ul className='list-unstyled'>
                  <li>
                    <span className={`${classes.contactItem}`}>
                      <UserTag />
                      <span className='pl-16'>157</span>
                    </span>
                  </li>
                  <li>
                    <span className={`${classes.contactItem}`}>
                      <Call />
                      <span className='pl-16'>(414) 687 - 5892</span>
                    </span>
                  </li>
                  <li>
                    <span className={`${classes.contactItem}`}>
                      <Message />
                      <span className='pl-16'>info@azincloud.az</span>
                    </span>
                  </li>
                  <li>
                    <span className={`${classes.contactItem}`}>
                      <Location />
                      <span className='pl-16'>
                        74, Alibey Huseynzade, AZ1009, Baku, Azerbaijan
                      </span>
                    </span>
                  </li>
                </ul>
                <div className={classes.borderLine}></div>
              </div>
              <ul className={classes.contactSocial}>
                <li className='ftco-animate'>
                  <NavLink
                    to='#'
                    data-toggle='tooltip'
                    data-placement='top'
                    title='Twitter'
                  >
                    <Facebook />
                  </NavLink>
                </li>
                <li className='ftco-animate'>
                  <NavLink
                    to='#'
                    data-toggle='tooltip'
                    data-placement='top'
                    title='Facebook'
                  >
                    <Instagram />
                  </NavLink>
                </li>
                <li className='ftco-animate'>
                  <NavLink
                    to='#'
                    data-toggle='tooltip'
                    data-placement='top'
                    title='Instagram'
                  >
                    <Tweet />
                  </NavLink>
                </li>
                <li className='ftco-animate'>
                  <NavLink
                    to='#'
                    data-toggle='tooltip'
                    data-placement='top'
                    title='Instagram'
                  >
                    <Linkin />
                  </NavLink>
                </li>
                <li className='ftco-animate'>
                  <NavLink
                    to='#'
                    data-toggle='tooltip'
                    data-placement='top'
                    title='Instagram'
                  >
                    <Youtube />
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className='col-md-6'>
              <div className={classes.contactMap}>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12157.109337708844!2d49.8332829!3d40.3805456!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da26259811b%3A0xd8e93c5caf8d91ba!2sAzInTelecom!5e0!3m2!1str!2saz!4v1706168595454!5m2!1str!2saz'
                  width='100%'
                  height='400'
                  loading='lazy'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.formContactSec}>
        <div className='container'>
          <div className={classes.formContact}>
            <p className={classes.formTitle}>Write us</p>
            <div className='row'>
              <div className='col-6'>
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
                    <div className='col-lg-12'>
                      <Form.Item rules={rules.email} name='email'>
                        <Input placeholder={translate('email')} />
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
                      <Form.Item rules={rules.content} name='content'>
                        <Input.TextArea
                          rows={13}
                          placeholder={translate('content')}
                        />
                      </Form.Item>
                    </div>
                  </div>
                  <div className='row mt-20'>
                    <div className='col-lg-12'>
                      <Button type='primary' htmlType='submit'>
                        {translate('submit')}
                      </Button>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
            <img className={classes.emailPng} src={emailPng} alt='' />
            <img className={classes.formBack} src={formBack} alt='' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactComponent;
