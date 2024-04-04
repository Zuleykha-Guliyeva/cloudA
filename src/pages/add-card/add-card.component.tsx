import { useAddCardStyles } from './add-card.style';
import info from 'assets/images/statics/info.svg';
import ButtonComponent from 'core/shared/button/button.component';
import { Routes } from 'router/routes';
import useLocalization from 'assets/lang';
const AddCardComponent = () => {
  const classes = useAddCardStyles();
  const translate = useLocalization();
  return (
    <div className={classes.addCardPage}>
      <div className='container'>
        <div className={classes.addCardBox}>
          <div className={classes.infoIcon}>
            <img src={info} alt='' />
          </div>
          <div className={classes.userTitle}>
            <p>
              Hörmətli,
              <span>Turkay Zargarli</span>
            </p>
          </div>
          <div className={classes.userEmailDesc}>
            <p>
              <span>zergerliturka@gmail.com</span> e-maili ilə etdiyiniz
              qeydiyyatınızı tamamlamaq üçün zəhmət olmasa ödəniş məlumatlarını
              daxil edəsiniz.
            </p>
          </div>
          <div>
              <ButtonComponent
                url={Routes.signin}
                text={translate('addcard')}
                className='aboutBtn'
              ></ButtonComponent>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddCardComponent;
