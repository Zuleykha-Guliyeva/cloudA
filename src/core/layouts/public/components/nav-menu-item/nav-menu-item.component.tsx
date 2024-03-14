import { useCallback } from 'react';
import { INavMenuItemProps } from '../../public';
import { useNavMenuItemStyles } from './nav-menu-item.style';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleNavMenu } from 'store/store.reducer';

const NavMenuItemComponent = ({ name, link }: INavMenuItemProps) => {
  const classes = useNavMenuItemStyles();
  const location = useLocation();
    const dispatch = useDispatch();
  const isActive = location.pathname === link;
const mobileMenuOpen = useCallback(() => {
  dispatch(toggleNavMenu());
}, [dispatch]);
  return (
    <li className={classes.item}>
      <NavLink
        className={`${classes.link} ${isActive ? classes.active : ''}`}
        to={{ pathname: link }}
      >
        <div className={classes.itemText}>
          <span onClick={mobileMenuOpen}>{name}</span>
        </div>
      </NavLink>
    </li>
  );
};

export default NavMenuItemComponent;
