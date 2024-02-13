import { NavLink } from 'react-router-dom';
import { Button, Input } from 'antd';
import { UserTag, Call, Message, Location } from 'assets/images/icons/contact';
import {
  Facebook,
  Instagram,
  Tweet,
  Linkin,
  Youtube,
} from 'assets/images/icons/sosial';
import { useFooterStyles } from './footer.style';

const FooterComponent = () => {
  const classes = useFooterStyles();

  return (
    <div className={classes.footer}>
      <div className='container'>
        <div className='row align-center justify-between'>
          <div className='col-md-9'>
            <div className='row'>
              <div className='col-12'>
                <p className={classes.footTitle}>
                  You can keep up to date with the news by subscribing
                </p>
              </div>
            </div>
            <div className='row align-center justify-between'>
              <div className='col-md-6'>
                <div className={classes.relative}>
                  <Input
                    className={classes.inputSubscribe}
                    placeholder='mail.cloud.az'
                  ></Input>
                  <Button className={classes.btnSubscribe}>Subscribe</Button>
                </div>
              </div>
              <div className='col-md-6'>
                <ul className={classes.footerSocial}>
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
            </div>
          </div>
          <div className='col-md-3 pl-0 justify-end'>
            <div className={classes.verticalLine}>
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
                    <Call />
                    <span className='pl-16'>(414) 687 - 5892</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='#'
                    className={`${classes.footMenuItem} d-flex align-center`}
                  >
                    <Message />
                    <span className='pl-16'>info@azincloud.az</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='#'
                    className={`${classes.footMenuItem} d-flex align-center`}
                  >
                    <Location />
                    <span className='pl-16'>
                      74, Alibey Huseynzade, AZ1009, Baku, Azerbaijan
                    </span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
