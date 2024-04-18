import { Button, Form, Input } from 'antd';
import { usePersonalStyles } from './personal.style';
import addEmail from 'assets/images/statics/add-circle.svg';
import edit from 'assets/images/statics/edit.svg';
import trash from 'assets/images/statics/trash.svg';
import { getToken } from 'core/helpers/get-token';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from 'store/store';
import { setUser } from 'store/store.reducer';
import useLocalization from 'assets/lang';
import { errorToast } from 'core/shared/toast/toast';
import { useNewPassword } from './actions/new-password.mutation';
const PersonalComponent = () => {
  const classes = usePersonalStyles();
  const translate = useLocalization();
  const [showAddEmail, setShowAddEmail] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const initialValues = {
    currentPass: '',
    newPass: '',
    repeatPass: '',
  };
  const rules = useMemo(
    () => ({
      currentPassword: [
        {
          required: true,
          message: translate('input_required'),
        },
      ],
      newPassword: [
        {
          required: true,
          message: translate('input_required'),
        },
      ],
      repeatPassword: [
        {
          required: true,
          message: translate('input_required'),
        },
      ],
    }),
    [translate]
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const token = getToken();
    dispatch(setUser(token));
  }, []);
  const user = useSelector((state: IState) => state.user);
  const {id} = user;
  const newPassword = useNewPassword();
    const onSubmit = useCallback(
      (values: any) => {
        const mutadeData = { ...values, userId:id}
        const { newPass, repeatPass } = values;
        if (newPass !== repeatPass) {
          errorToast('Passwords do not match');
        } else {
          newPassword.mutate(mutadeData);
          setShowChangePassword(!showChangePassword);
        }
      },
      [newPassword]
    );
  const handleAddEmail = useCallback(() => {
    setShowAddEmail(!showAddEmail);
  }, [showAddEmail]);

  const handleClick = useCallback(() => {
    setShowChangePassword(!showChangePassword);
  }, [showChangePassword]);

  if (!user) {
    return (
      <div className={classes.personal}>
        <div className='container'>
          <p className={classes.personalTitle}>
            Bu məlumatları görmək üçün əvvəlcə giriş etməlisiniz!
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.personal}>
        <div className='container'>
          <p className={classes.personalTitle}>Setting</p>
          <div className={classes.personalDetailBox}>
            <div className='row'>
              <div className='col-md-3 mb-34'>
                <p className={classes.detailTitle}>Ad, Soyad</p>
                <p
                  className={classes.detailPersonal}
                >{`${user.name} ${user.surname}`}</p>
              </div>
              <div className='col-md-3 mb-34'>
                <p className={classes.detailTitle}>Qeydiyyatda olduğu ünvan</p>
                <p className={classes.detailPersonal}>{user.address}</p>
              </div>
              <div className='col-md-3 mb-34'>
                <p className={classes.detailTitle}>Ölkə</p>
                <p className={classes.detailPersonal}>{user.country}</p>
              </div>
              <div className='col-md-3 mb-34'>
                <p className={classes.detailTitle}>Şəhər</p>
                <p className={classes.detailPersonal}>{user.city}</p>
              </div>
              <div className='col-md-3 mb-34'>
                <p className={classes.detailTitle}>Şirkət adı</p>
                <p className={classes.detailPersonal}>{user.company}</p>
              </div>
              <div className='col-md-3 mb-34'>
                <p className={classes.detailTitle}>E-mail</p>
                <p className={classes.detailPersonal}>{user.email}</p>
              </div>
              <div className='col-md-3 mb-34'>
                <p className={classes.detailTitle}>Mobil nömrə</p>
                <p className={classes.detailPersonal}>{user.phone}</p>
              </div>
            </div>
          </div>
          <div className={classes.emailBox}>
            <div className={classes.emails}>
              <p className={classes.emailTitle}>E-mail</p>
              <p className={classes.email}>{user.email}</p>
            </div>
            {showAddEmail ? (
              <div className={classes.disableAdd}>
                <Input
                  className={classes.disableAddEmail}
                  placeholder='Email'
                />
                <img src={trash} alt='' />
              </div>
            ) : (
              <></>
            )}
            <div className={classes.addEmail}>
              <img
                src={addEmail}
                alt=''
                className={classes.emailIcon}
                onClick={handleAddEmail}
              />
              <span className={classes.email}>Add e-mail</span>
            </div>
          </div>
          <div className={classes.passwordChangeBox}>
              <span>Change your password</span>
            {!showChangePassword ? (
              <img onClick={handleClick} src={edit} alt='' />
            ) : (
              <div className={classes.changePassForm}>
                <Form
                  name='basic'
                  initialValues={initialValues}
                  onFinish={onSubmit}
                  layout='vertical'
                >
                  <div className='row'>
                    <div className='col-lg-6'>
                      <Form.Item
                        rules={rules.currentPassword}
                        name='currentPass'
                      >
                        <Input placeholder={translate('currentPass')} />
                      </Form.Item>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-lg-3'>
                      <Form.Item rules={rules.newPassword} name='newPass'>
                        <Input placeholder={translate('newPass')} />
                      </Form.Item>
                    </div>
                    <div className='col-lg-3'>
                      <Form.Item
                        rules={rules.repeatPassword}
                        name='repeatPass'
                      >
                        <Input placeholder={translate('repeatPass')} />
                      </Form.Item>
                    </div>
                  </div>
                  <div className='row mt-20'>
                    <div className='col-lg-12'>
                      <div className={classes.BottomBorderForm}>
                        <Button type='primary' htmlType='submit' onClick={()=>{setShowChangePassword(!showChangePassword)}}>
                          {translate('discard')}
                        </Button>
                        <Button type='primary' htmlType='submit'>
                          {translate('save')}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
};
export default PersonalComponent;
