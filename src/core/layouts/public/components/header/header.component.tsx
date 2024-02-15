import { useLocation } from "react-router-dom";
import HeaderNavbarComponent from "../header-navbar/header-navbar.component";
import "./header.style";
import { useHeaderStyles } from "./header.style";
import colors from "assets/styles/abstracts/color";

const HeaderComponent = () => {
  const classes = useHeaderStyles();
  const location = useLocation();
  const pathname = location.pathname;
  let headerBackgroundColor = {};
  if (pathname === '/' || pathname === '/home' || pathname === '/about'){
    headerBackgroundColor = {background: ''};
  } else {
    headerBackgroundColor = { background: colors.headerbackground };
  }
  return (
    <div className={classes.header} style={headerBackgroundColor}>
      <div className='container'>
        <HeaderNavbarComponent />
      </div>
    </div>
  );
};

export default HeaderComponent;
