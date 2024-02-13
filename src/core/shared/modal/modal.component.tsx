import { Modal } from 'antd';
import { useModalStyles } from './modal.style';
import ButtonComponent from '../button/button.component';
import useLocalization from 'assets/lang';

const ModalComponent = ({ open, onClose, item }) => {
  const classes = useModalStyles();
  const translate = useLocalization();
  const modalFooter = null;
  return (
    <Modal
      open={open}
      footer={modalFooter}
      onCancel={onClose}
      width={600}
      centered
    >
      <div className={classes.modalBox}>
        <div className={classes.card}>
          <div className={classes.titleIcon}>
            <div>
              <img src={item.file.url} alt='' />
            </div>
            <div>
              <div>
                <span>{item.name}</span>
              </div>
              <div className={classes.tag}>
                <span>{item.tag}</span>
              </div>
            </div>
          </div>
          <div className={classes.description}>{item.description}</div>
          <div className='row'>
            <div className='col-6'>
              <ButtonComponent
                buttonText={translate('visitBtn')}
                classN='visitBtn'
                close={onClose}
                url={item.file.url}
              />
            </div>
            <div className='col-6'>
              <ButtonComponent
                url={item.file.url}
                buttonText={translate('closeBtn')}
                classN='closeBtn'
                close={onClose}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalComponent;
