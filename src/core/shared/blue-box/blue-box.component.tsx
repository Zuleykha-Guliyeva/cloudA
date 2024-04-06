import { useBlueBoxStyles } from "./blue-box.style";
import signBack1 from 'assets/images/statics/sign-in/sign-back1.png';
import signBack2 from 'assets/images/statics/sign-in/sign-back2.png';
import backIcon from 'assets/images/statics/back.png';
import useLocalization from "assets/lang";
import { useNavigate } from "react-router-dom";

const BlueBoxComponent = ({children,text}) => {
    const classes = useBlueBoxStyles();
    const translate = useLocalization();
    const navigate = useNavigate();
    const goBack = () => {
      navigate(-1);
    };
    
return (
  <div className='container pt-150'>
    <div className={classes.signUpPage}>
      <div className={classes.backIcon} onClick={goBack}>
        <img src={backIcon} alt='' />
        <span className={classes.backSpan}>{translate('back')}</span>
      </div>
      <div className={classes.signUpPagePadding}>
        <div className={classes.signBackImg1}>
          <img src={signBack1} alt='' />
        </div>
        <div className={classes.signBackImg2}>
          <img src={signBack2} alt='' />
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className={text !=='' ? classes.blueBoxTitle : ''}>
              <p>{text}</p>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  </div>
);
}
export default BlueBoxComponent;