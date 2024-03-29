import { usePersonalStyles } from './personal.style';
import addEmail from 'assets/images/statics/add-circle.svg';
import edit from 'assets/images/statics/edit.svg';
import trash from 'assets/images/statics/trash.svg';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { IState } from 'store/store';
const PersonalComponent = () => {
  const classes = usePersonalStyles();
  const [showAddEmail,setShowAddEmail] = useState(false);

  const handleAddEmail = () => {
    setShowAddEmail(!showAddEmail)
  };
  const user = useSelector((state:IState) => state.user)
  return (
    <div className={classes.personal}>
      <div className='container'>
        <p className={classes.personalTitle}>Setting</p>
        <div className={classes.personalDetailBox}>
          <div className='row'>
            <div className='col-md-3 mb-34'>
              <p className={classes.detailTitle}>Ad, Soyad</p>
              <p className={classes.detailPersonal}>{`${user.name} ${user.surname}`}</p>
            </div>
            <div className='col-md-3 mb-34'>
              <p className={classes.detailTitle}>Qeydiyyatda olduğu ünvan</p>
              <p className={classes.detailPersonal}>
                {user.address}
              </p>
            </div>
            <div className='col-md-3 mb-34'>
              <p className={classes.detailTitle}>Ölkə </p>
              <p className={classes.detailPersonal}>
                {user.country}
              </p>
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
          {showAddEmail? <div className={classes.disableAdd}>
            <div className={classes.disableAddEmail}>
              <p>Email</p>
            </div>
            <img src={trash} alt='' />
          </div> : <></>}
          <div className={classes.addEmail}>
            <img src={addEmail} alt='' className={classes.emailIcon} onClick={handleAddEmail}/>
            <span className={classes.email}>Add e-mail</span>
          </div>
        </div>
        <div className={classes.passwordChangeBox}>
          <span>Change your password</span>
          <img src={edit} alt='' />
        </div>
      </div>
    </div>
  );
};
export default PersonalComponent;
