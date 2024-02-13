import { useItemStyles } from "./item.style";
import abouticon from 'assets/images/statics/about/abouticon.png'
const ItemComponent = ({ classN }) => {
  const classes = useItemStyles();
  const classItem = classN ? classes[classN] : ''
  return (
    <div className={classItem}>
      <div className='row'>
        <div className='col-2 mr-40'>
          <div className={classes.aboutIcon}>
            <img src={abouticon} alt='' />
          </div>
        </div>
        <div className='col-8'>
          <p className={classes.title}>
            Adipiscing phasellus orci in dictumst faucibus ullamcorper odio
            faucibus. Nunc.
          </p>
          <p className={classes.description}>
            Malesuada tortor fringilla ut faucibus. Urna tellus lectus platea
            turpis non. Tellus odio eu ante
          </p>
        </div>
      </div>
    </div>
  );
};
export default ItemComponent;