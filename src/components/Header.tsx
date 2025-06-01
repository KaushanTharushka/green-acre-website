
import React, { useState, useEffect, useCallback } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Solutions", href: "#solutions" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  const closeSheet = useCallback(() => setIsOpen(false), []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white py-4'}`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center mb-4 md:mb-0"
        >
          <div className="mr-2">
            <img 
              src="/lovable-uploads/91603dcd-d955-45bb-930c-87699f083e9b.png" 
              alt="Revive Agro Logo" 
              className="h-12 w-auto"
              loading="eager"
            />
          </div>
          <h1 className="text-2xl font-bold text-sourcing-green">Revive Agro</h1>
        </motion.div>
        
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="h-10 w-10 flex items-center justify-center rounded-md bg-sourcing-green/10 hover:bg-sourcing-green/20 transition-colors">
                <Menu className="h-6 w-6 text-sourcing-green" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item, i) => (
                  <motion.a 
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                    href={item.href} 
                    className="text-sourcing-text hover:text-sourcing-green transition pl-2 py-2 border-l-2 border-transparent hover:border-sourcing-green" 
                    onClick={closeSheet}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block flex-grow">
          <ul className="flex flex-wrap justify-center md:justify-end gap-6">
            {navItems.map((item, i) => (
              <motion.li 
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
              >
                <a 
                  href={item.href} 
                  className="text-sourcing-text hover:text-sourcing-green transition relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-sourcing-green after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default React.memo(Header);
