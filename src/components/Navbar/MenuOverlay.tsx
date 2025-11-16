import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { menuVariants, menuItemVariants } from '@/utils/animations';

interface MenuItem {
  name: string;
  path: string;
}

interface MenuOverlayProps {
  isOpen: boolean;
  menuItems: MenuItem[];
  onClose: () => void;
}

const MenuOverlay = ({ isOpen, menuItems, onClose }: MenuOverlayProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 right-0 w-full h-screen bg-white z-999 flex items-center justify-center"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          <div className="flex flex-col gap-6 px-8">
            {menuItems.map((item, i) => (
              <motion.div
                key={item.name}
                custom={i}
                variants={menuItemVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <Link
                  to={item.path}
                  className="text-[clamp(3rem,8vw,6rem)] md:text-[clamp(2rem,10vw,4rem)] text-(--text-color) no-underline leading-none uppercase hover:text-(--primary-color) transition-colors duration-300 font-bold! font-family-big-shoulders"
                  onClick={onClose}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuOverlay;
