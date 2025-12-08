import React, { useState, useEffect } from 'react';
import { motion, MotionValue, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { NavItem } from '../types';

interface DockProps {
  items: NavItem[];
  activeId: string;
  onSelect: (id: string, e?: React.MouseEvent) => void;
}

export const Dock: React.FC<DockProps> = ({ items, activeId, onSelect }) => {
  const mouseX = useMotionValue(Infinity);

  // Responsive configuration
  const [config, setConfig] = useState({
    baseWidth: 50,
    magnifiedWidth: 90,
    distance: 150,
    gap: 'gap-4',
    marginBottom: 'bottom-6'
  });

  useEffect(() => {
    const updateConfig = () => {
      if (window.innerWidth < 640) { // Mobile
        setConfig({
          baseWidth: 38, // Smaller icons
          magnifiedWidth: 55, // Less magnification to avoid overflowing
          distance: 80, // Tighter trigger zone
          gap: 'gap-2',
          marginBottom: 'bottom-2'
        });
      } else { // Desktop
        setConfig({
          baseWidth: 50,
          magnifiedWidth: 90,
          distance: 150,
          gap: 'gap-4',
          marginBottom: 'bottom-6'
        });
      }
    };

    updateConfig();
    window.addEventListener('resize', updateConfig);
    return () => window.removeEventListener('resize', updateConfig);
  }, []);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={`fixed ${config.marginBottom} left-1/2 transform -translate-x-1/2 z-50 flex items-end ${config.gap} px-2 md:px-4 pb-2 h-24 pointer-events-auto max-w-full overflow-visible`}
    >
      {items.map((item) => (
        <DockIcon
          mouseX={mouseX}
          key={item.id}
          item={item}
          isActive={activeId === item.id}
          isAction={item.id === 'theme'}
          onClick={(e) => onSelect(item.id, e)}
          baseWidth={config.baseWidth}
          magnifiedWidth={config.magnifiedWidth}
          distanceLimit={config.distance}
        />
      ))}
    </motion.div>
  );
};

interface DockIconProps {
  mouseX: MotionValue<number>;
  item: NavItem;
  isActive: boolean;
  isAction?: boolean;
  onClick: (e: React.MouseEvent) => void;
  baseWidth: number;
  magnifiedWidth: number;
  distanceLimit: number;
}

const DockIcon: React.FC<DockIconProps> = ({
  mouseX,
  item,
  isActive,
  isAction = false,
  onClick,
  baseWidth,
  magnifiedWidth,
  distanceLimit
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isHovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distance,
    [-distanceLimit, 0, distanceLimit],
    [baseWidth, magnifiedWidth, baseWidth]
  );

  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square cursor-pointer relative flex flex-col items-center justify-end z-20 mb-2"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Active Indicator (Only for non-actions) */}
      {isActive && !isAction && (
        <motion.div
          layoutId="activeDot"
          className="absolute -bottom-4 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(200,0,0,0.8)]"
        />
      )}

      <motion.div
        className={`h-full w-full rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg overflow-hidden border ${isActive && !isAction
          ? 'bg-primary text-primary-foreground scale-105 border-primary'
          : 'bg-white/60 dark:bg-zinc-900/60 border-zinc-200 dark:border-white/10 backdrop-blur-md hover:bg-white/80 dark:hover:bg-zinc-800/80 text-muted-foreground hover:text-foreground'
          }`}
      >
        <div className="relative z-10 w-full h-full flex items-center justify-center p-2">
          {item.icon}
        </div>
      </motion.div>

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%", scale: 0.8 }}
            animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
            exit={{ opacity: 0, y: 5, x: "-50%", scale: 0.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="absolute -top-16 left-1/2 px-3 py-1.5 bg-popover/90 text-popover-foreground dark:bg-zinc-900/90 dark:text-zinc-100 text-xs font-semibold rounded-lg whitespace-nowrap border border-border/50 dark:border-white/10 shadow-xl dark:shadow-white/10 backdrop-blur-md pointer-events-none z-50"
          >
            {item.label}
            {/* Tooltip Arrow */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-popover/90 dark:bg-zinc-900/90 rotate-45 border-r border-b border-border/50 dark:border-white/10" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};