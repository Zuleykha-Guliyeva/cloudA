// import { useContactStyles } from './contact.style';
// import useLocalization from 'assets/lang';
import { useContact } from './actions/contact.query';

const ContactComponent = () => {
  // const classes = useContactStyles();
  // const translate = useLocalization();
  const { data } = useContact();
  console.log(data);

  return (
    <>
      
    </>
  );
};

export default ContactComponent;
