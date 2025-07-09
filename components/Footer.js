import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-2 sm:py-3 border-t border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-black/90 backdrop-blur-sm"
    >
      <div className="container-mobile">
        <div className="flex flex-col items-center justify-center">
          <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium text-center">
            © 2025 Pin Ren Toh
          </span>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;