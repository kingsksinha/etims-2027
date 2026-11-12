import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

const paddingClasses = {
  sm: 'p-4',
  md: 'p-6 sm:p-7',
  lg: 'p-6 sm:p-8 md:p-10',
} as const;

export default function Card({
  children,
  className = '',
  hoverable = false,
  padding = 'md',
}: CardProps) {
  return (
    <motion.div
      className={`bg-navy/85 backdrop-blur-xs rounded-2xl border border-border-dark shadow-xs ${paddingClasses[padding]} ${className}`}
      {...(hoverable && {
        whileHover: { y: -3, borderColor: 'rgba(53, 217, 232, 0.4)', boxShadow: '0 10px 30px -10px rgba(53, 217, 232, 0.15)' },
        transition: { type: 'spring', stiffness: 350, damping: 25 },
      })}
    >
      {children}
    </motion.div>
  );
}
