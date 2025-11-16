import { useState } from 'react';
import MenuButton from './MenuButton';
import MenuOverlay from './MenuOverlay';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'EXPERIENCE', path: '/experience' },
    { name: 'EDUCATION', path: '/education' },
    { name: 'WRITING', path: '/writing' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-1000 bg-transparent pt-8 pb-8">
        <div className="page-guard-rail flex justify-end items-center">
          <MenuButton isOpen={isOpen} onClick={toggleMenu} />
        </div>
      </nav>

      <MenuOverlay isOpen={isOpen} menuItems={menuItems} onClose={toggleMenu} />
    </>
  );
};

export default Navbar;
