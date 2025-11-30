import { useState, useEffect } from 'react';
import MenuIcon from './MenuIcon';
import MenuOverlay from './MenuOverlay';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes} UK Europe/London`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

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
      <nav className="fixed top-10 left-18.5 right-18.5 z-1000">
        <div
          className="flex justify-between items-center px-[4.25rem] py-[1.125rem] rounded-[1.625rem] relative overflow-hidden"
          style={{
            background: 'rgba(37, 41, 52, 0.15)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div
            className="absolute inset-0 rounded-[1.625rem] pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, #353F59 0%, #242833 100%)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              padding: '1px',
            }}
          />

          <div
            className="text-white text-[1rem] font-normal tracking-wide relative z-10"
            style={{ fontFamily: 'var(--font-family-outfit)' }}
          >
            JOHN ÓJẸ́TÚNDÉ 👋🏾
          </div>

          <div
            className="text-white text-[1rem] font-normal relative z-10"
            style={{ fontFamily: 'var(--font-family-outfit)' }}
          >
            {currentTime}
          </div>

          <div
            className="w-12.5 h-12.5 flex items-center justify-center rounded-full relative z-10 overflow-hidden"
            style={{ background: '#20242C' }}
          >
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, #7A9DF7 0%, #24272E 50%, #24272E 100%)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                padding: '0.57px',
              }}
            />
            <button
              onClick={toggleMenu}
              className="w-full h-full flex items-center justify-center border-none cursor-pointer transition-all duration-300 hover:opacity-80 relative z-10"
              style={{ background: 'transparent' }}
            >
              <MenuIcon isOpen={isOpen} />
            </button>
          </div>
        </div>
      </nav>

      <MenuOverlay isOpen={isOpen} menuItems={menuItems} onClose={toggleMenu} />
    </>
  );
};

export default Navbar;
