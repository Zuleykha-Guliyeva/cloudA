import { useFooterStyles } from './footer.style';
import { NavLink } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import {UserTag} from 'assets/images/icons/user-tag';
import { Call } from 'assets/images/icons/call';
import { Message } from 'assets/images/icons/message';
import { Location } from 'assets/images/icons/location';
import { Button, Input } from 'antd';

const FooterComponent = () => {
  const classes = useFooterStyles();

  return (
    <div className={classes.footer}>
      <div className='container'>
        <div className='row align-center'>
          <div className='col-md-6'>
            <p className={classes.footTitle}>You can keep up to date with the news by subscribing</p>
            <div className={classes.relative}>
              <Input
                className={classes.inputSubscribe}
                placeholder='mail.cloud.az'
              ></Input>
              <Button className={classes.btnSubscribe}>Subscribe</Button>
            </div>
          </div>
          <div className='col-md-3'>
            <ul className={classes.footerSocial}>
              <li className='ftco-animate'>
                <NavLink
                  to='#'
                  data-toggle='tooltip'
                  data-placement='top'
                  title='Twitter'
                >
                  <FaFacebookF />
                </NavLink>
              </li>
              <li className='ftco-animate'>
                <NavLink
                  to='#'
                  data-toggle='tooltip'
                  data-placement='top'
                  title='Facebook'
                >
                  <FaTwitter />
                </NavLink>
              </li>
              <li className='ftco-animate'>
                <NavLink
                  to='#'
                  data-toggle='tooltip'
                  data-placement='top'
                  title='Instagram'
                >
                  <PiInstagramLogoFill />
                </NavLink>
              </li>
              <li className='ftco-animate'>
                <NavLink
                  to='#'
                  data-toggle='tooltip'
                  data-placement='top'
                  title='Instagram'
                >
                  <FaLinkedinIn />
                </NavLink>
              </li>
              <li className='ftco-animate'>
                <NavLink
                  to='#'
                  data-toggle='tooltip'
                  data-placement='top'
                  title='Instagram'
                >
                  <FaYoutube />
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='col-md-3 justify-end'>
            <ul className='list-unstyled'>
              <li>
                <NavLink
                  to='#'
                  className={`${classes.footMenuItem} d-flex align-center`}
                >
                  <UserTag />
                  <span className='pl-16'>157</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='#'
                  className={`${classes.footMenuItem} d-flex align-center`}
                >
                  <Message />
                  <span className='pl-16'>contact@company.com</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='#'
                  className={`${classes.footMenuItem} d-flex align-center`}
                >
                  <Call />
                  <span className='pl-16'>(414) 687 - 5892</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='#'
                  className={`${classes.footMenuItem} d-flex align-center`}
                >
                  <Location />
                  <span className='pl-16'>
                    74, Alibey Huseynzade, AZ1009, Baku,Azerbaijan
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
