import useLocalization from 'assets/lang';
import { useNavMenuStyles } from './nav-menu.style';
import { Routes } from 'router/routes';
import NavMenuItemComponent from '../nav-menu-item/nav-menu-item.component';
import { generateGuid } from 'core/helpers/generate-guid';
import { IoMenu } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { setLocale, toggleNavMenu } from 'store/store.reducer';
import { IState } from 'store/store';
import classNames from 'classnames';
import { CiSearch } from 'react-icons/ci';
import ButtonComponent from 'core/shared/button/button.component';
import { Dropdown, MenuProps, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const NavMenuComponent = () => {
  const classes = useNavMenuStyles();
  const translate = useLocalization();
  const dispatch = useDispatch();
  const navMenu = useSelector((state: IState) => state.navMenu);
const lang = useSelector((state:IState)=>{
  state.locale
}) ;
console.log(lang);

  const mobileMenuOpen = useCallback(() => {
    dispatch(toggleNavMenu());
  }, [dispatch]);

  const navMenuClasses = classNames({
    [classes.active]: !navMenu,
    [classes.hiden]: navMenu,
  });
  interface NavMenuItem {
    id: number;
    name: string;
    link: string;
  }
  const navMenuItems = [
    {
      id: 2,
      name: translate('about_title'),
      link: Routes.about,
    },
    {
      id: 3,
      name: translate('product_title'),
      link: Routes.products,
    },
    {
      id: 4,
      name: translate('news_title'),
      link: Routes.news,
    },
    {
      id: 5,
      name: translate('contact_title'),
      link: Routes.contact,
    },
  ];

  const onClick: MenuProps['onClick'] = ({ key } : any) => {
    dispatch(setLocale(key))
  };

  const items: { label: string; key: string }[] = [
    {
      label: 'az',
      key: 'az',
    },
    {
      label: 'en',
      key: 'en',
    },
    {
      label: 'ru',
      key: 'ru',
    },
  ];

  return (
    <div className={classes.navMenu}>
      <ul className={navMenuClasses}>
        {navMenuItems.map((i: NavMenuItem) => (
          <NavMenuItemComponent
            key={generateGuid()}
            name={i.name}
            link={i.link}
          />
        ))}
      </ul>
      <div className={classes.searchIcon}>
        <CiSearch />
      </div>

      <Dropdown menu={{ items, onClick }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <span>{}</span>
            <DownOutlined style={{ color: '#fff' }} />
          </Space>
        </a>
      </Dropdown>

      <div className='d-flex align-center'>
        <ButtonComponent
          url={Routes.signin}
          text={translate('giris')}
          className='loginBtn'
        />
      </div>
      <div className={classes.mobileMenuIcon} onClick={mobileMenuOpen}>
        {navMenu ? <IoClose /> : <IoMenu />}
      </div>
    </div>
  );
};

export default NavMenuComponent;
