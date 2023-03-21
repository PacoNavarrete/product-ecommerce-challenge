import { NavBarWrapper } from '../style/Wrappers';
import brandLogo from '../assets/icons/logo.svg';
import cartIcon from '../assets/icons/icon-cart.svg';
import imageAvatar from '../assets/images/image-avatar.svg';
import { NavMenuList } from '../style/Navigation';

const TopNavBar = () => {
  return (
    <>
      <NavBarWrapper>
        <img src={brandLogo} alt="brand-logo" width="160px" height="25px" />
        <NavMenuList>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </NavMenuList>
        <img src={cartIcon} alt="cart-icon" />
        <img src={imageAvatar} alt="cart-icon" width="50px" />
      </NavBarWrapper>
      <hr />
    </>
  );
};

export default TopNavBar;
