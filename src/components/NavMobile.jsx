import { useClickAway } from "react-use";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import "../style/NavMobile.css";

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  
  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="mobile-nav lg:hidden">
      <Hamburger toggled={isOpen}  size={24} toggle={setOpen} color='white' />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mobile-popup"
          >
            <ul className="mobile-menu">
              <li onClick={() => setOpen(false)} className="mobile-menu-item">Home</li>
              <li onClick={() => setOpen(false)} className="mobile-menu-item">About</li>
              <li onClick={() => setOpen(false)} className="mobile-menu-item">Solution</li>
              <li onClick={() => setOpen(false)} className="mobile-menu-item">Connect</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
