import { Form } from 'antd';
import { Field, Formik } from 'formik';
import { useFormStyles } from './form.style';
import ButtonComponent from '../button/button.component';
import useLocalization from 'assets/lang';

const FormComponent = () => {
  const classes = useFormStyles();
  const translate = useLocalization();
  const intialValues = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    content: '',
  };
  const handleSubmit = () => {};
  return (
    <Formik initialValues={intialValues} onSubmit={handleSubmit}>
      <Form>
        <div className={classes.formContainer}>
          <div className={classes.formRow}>
            <div className={classes.formField}>
              <label htmlFor='name'>{translate('nameSurname')}</label> <br />
              <Field
                type='text'
                id='name'
                name='name'
                placeholder='Javidan Nasib'
              />
            </div>
            <div className={classes.formField}>
              <label htmlFor='name'>{translate('email')}</label> <br />
              <Field
                type='text'
                id='name'
                name='name'
                placeholder='javidan.nasib@gmail.com'
              />
            </div>
          </div>
          <div className={classes.formRow}>
            <div className={classes.formField}>
              <label htmlFor='name'>{translate('phone')}</label> <br />
              <Field
                type='text'
                id='name'
                name='name'
                placeholder='+994 00 000 00 00'
              />
            </div>
            <div className={classes.formField}>
              <label htmlFor='name'>{translate('subject')}</label> <br />
              <Field
                type='text'
                id='name'
                name='name'
                placeholder='Mövzunu seçin'
              />
            </div>
          </div>
          <div className={classes.formField}>
            <label htmlFor='name'>{translate('msg')}</label> <br />
            <Field
              type='text'
              id='name'
              name='name'
              placeholder='Mesajınızı daxil edin.'
            />
          </div>
        </div>
        <div className={classes.formRow}>
          <ButtonComponent
            buttonText={translate('submit')}
            classN='greenBtn100'
            close={''}
            url={''}
          ></ButtonComponent>
        </div>
      </Form>
    </Formik>
  );
};
export default FormComponent;
