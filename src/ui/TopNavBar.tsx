import brandLogo from '../assets/icons/logo.svg';
import cartIcon from '../assets/icons/icon-cart.svg';
import imageAvatar from '../assets/images/image-avatar.svg';
import ShoppingCart from '../shoecommerce/views/ShoppingCart';
import { NavMenuList } from '../style/Navigation';
import { Avatar, BrandLogo, CartIcon } from '../style/Images';
import { CartBadge, NavHorizontalLine } from '../style/Utils';
import {
  CartIconWrapper,
  NavBarWrapper,
  SectionWrapper,
} from '../style/Wrappers';
import { ShoppCartBox } from '../style/Boxes';

const TopNavBar = () => {
  return (
    <>
      <NavBarWrapper>
        <SectionWrapper>
          <BrandLogo src={brandLogo} alt="brand-logo" />
          <NavMenuList>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </NavMenuList>
        </SectionWrapper>
        <SectionWrapper>
          <CartIconWrapper>
            <CartIcon src={cartIcon} alt="cart-icon" />
            <CartBadge>{3}</CartBadge>
          </CartIconWrapper>
          <Avatar src={imageAvatar} alt="cart-icon" width="50px" />
        </SectionWrapper>
      </NavBarWrapper>
      <NavHorizontalLine />
    </>
  );
};
export default TopNavBar;
