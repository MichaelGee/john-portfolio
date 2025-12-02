import { useState, useEffect } from 'react';
import NavMenu from './NavMenu';

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

  return (
    <nav className="fixed top-10 left-4 right-4 md:left-18.5 md:right-18.5 z-1000">
      <div
        className="flex justify-between items-center px-4 md:px-[4.25rem] py-[1.125rem] rounded-[1.625rem] relative overflow-hidden"
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
          style={{ fontFamily: 'var(--font-family-satoshi)' }}
        >
          JOHN ÓJẸ́TÚNDÉ 👋🏾
        </div>

        <div
          className="hidden md:block text-white text-[1rem] font-normal relative z-10"
          style={{ fontFamily: 'var(--font-family-satoshi)' }}
        >
          {currentTime}
        </div>

        <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
