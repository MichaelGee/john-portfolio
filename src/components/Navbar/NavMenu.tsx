import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import MenuIcon from './MenuIcon';

interface NavMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const NavMenu = ({ isOpen, setIsOpen }: NavMenuProps) => {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Mentorship', path: '/mentorship' },
    { name: 'Photography', path: '/photography' },
    { name: 'Writing', path: '/writing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <div
          className="w-12.5 h-12.5 flex items-center justify-center rounded-full relative z-10 overflow-hidden cursor-pointer"
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
          <div className="relative z-10">
            <MenuIcon isOpen={isOpen} />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={24}
        className="w-60.25  overflow-hidden relative border-none"
        style={{
          background: '#151C2E',
          borderRadius: '1.25rem 1.25rem',
          boxShadow: '0px 10px 24.7px 0px rgba(36, 49, 80, 0.32)',
          backdropFilter: 'blur(24.7px)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, #1F2C4B 0%, #192440 100%)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            padding: '1px',
            borderRadius: '1.25rem 1.25rem',
          }}
        />
        <div className="p-6 flex flex-col gap-4 relative z-10">
          {menuItems.map((item, index) => (
            <DropdownMenuItem key={index} asChild>
              <Link
                to={item.path}
                className="text-white text-lg font-normal py-2 px-2 rounded-lg hover:bg-white/5 transition-colors block"
                style={{ fontFamily: 'var(--font-family-satoshi)' }}
              >
                {item.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavMenu;
