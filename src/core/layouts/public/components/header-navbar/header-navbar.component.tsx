import logoSite from "assets/images/statics/logo-site.png";
import { NavLink } from "react-router-dom";
import { Routes } from "router/routes";
import NavMenuComponent from "../nav-menu/nav-menu.component";
import { useHeaderNavbarStyles } from "./header-navbar.style";

const HeaderNavbarComponent = () => {
  const classes = useHeaderNavbarStyles();
  return (
    <div className={classes.navbar}>
      <div className='row align-center'>
        <div className='col-3'>
          <div className={classes.logoImg}>
            <NavLink to={Routes.home}>
              <img src={logoSite} alt='logo' />
            </NavLink>
          </div>
        </div>
        <div className='col-9'>
          <NavMenuComponent />
        </div>
      </div>
    </div>
  );
};

export default HeaderNavbarComponent;



