import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Instagram, ExternalLink, Moon, Sun } from 'lucide-react';

interface ConnectMenuProps {
    isDark: boolean;
    toggleTheme: () => void;
}

export const ConnectMenu: React.FC<ConnectMenuProps> = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    { name: 'GitHub', icon: <Github size={18} />, href: '#' },
    { name: 'LinkedIn', icon: <Linkedin size={18} />, href: '#' },
    { name: 'Email', icon: <Mail size={18} />, href: 'mailto:hello@example.com' },
    { name: 'Instagram', icon: <Instagram size={18} />, href: '#' },
  ];

  return (
    <div className="fixed top-6 right-6 z-40">
      <motion.button
        layout
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border transition-all duration-300 shadow-lg ${
            isOpen 
            ? 'bg-primary/90 border-primary text-primary-foreground' 
            : 'bg-background/40 border-border text-foreground hover:bg-background/60'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="font-semibold text-sm tracking-wide">CONNECT</span>
        <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <ChevronDown size={16} />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 10, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, scale: 0.95, filter: 'blur(10px)' }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute right-0 w-72 bg-popover/80 backdrop-blur-2xl border border-border rounded-2xl p-2 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-1">
                {socialLinks.map((link, idx) => (
                    <motion.a
                        key={link.name}
                        href={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-accent hover:text-accent-foreground text-muted-foreground transition-colors group"
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-primary group-hover:text-primary transition-colors">{link.icon}</span>
                            <span className="text-sm font-medium">{link.name}</span>
                        </div>
                        <ExternalLink size={12} className="opacity-0 group-hover:opacity-50" />
                    </motion.a>
                ))}
                
                <div className="h-px bg-border my-1" />
                
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                    onClick={toggleTheme}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-accent hover:text-accent-foreground text-muted-foreground transition-colors w-full text-left"
                >
                     <div className="flex items-center gap-3">
                        {isDark ? <Sun size={18} className="text-yellow-500" /> : <Moon size={18} className="text-indigo-500" />}
                        <span className="text-sm font-medium">{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                    </div>
                </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};