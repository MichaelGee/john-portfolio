import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { menuItemVariants } from '../../utils/animations';

interface MenuItemProps {
  name: string;
  path: string;
  index: number;
  onClick: () => void;
}

const MenuItem = ({ name, path, index, onClick }: MenuItemProps) => {
  return (
    <motion.div
      custom={index}
      variants={menuItemVariants}
      initial="closed"
      animate="open"
      exit="closed"
    >
      <Link
        to={path}
        className="block text-[clamp(3rem,8vw,6rem)] leading-none transition-colors duration-300 uppercase hover:text-(--primary-color) md:text-[clamp(2rem,10vw,4rem)] font-bold! text-(--text-color)"
        style={{ fontFamily: 'var(--font-family-big-shoulders)' }}
        onClick={onClick}
      >
        {name}
      </Link>
    </motion.div>
  );
};

export default MenuItem;
