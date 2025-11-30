import hamburgerIcon from '@/assets/hamburger.svg';
import closeIcon from '@/assets/close.svg';

interface MenuIconProps {
  isOpen: boolean;
}

const MenuIcon = ({ isOpen }: MenuIconProps) => {
  return isOpen ? (
    <img src={closeIcon} alt="Close" width="24" height="24" />
  ) : (
    <img src={hamburgerIcon} alt="Menu" width="18" height="14" />
  );
};

export default MenuIcon;
