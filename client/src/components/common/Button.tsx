import { type ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  children: ReactNode;
  className?: string;
}

type AsButton = BaseProps &
  Omit<HTMLMotionProps<'button'>, keyof BaseProps> & {
    as?: 'button';
  };

type AsLink = BaseProps & {
  as: 'link';
  to: string;
};

export type ButtonProps = AsButton | AsLink;

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-cyan via-mint to-cyan text-midnight font-extrabold shadow-lg shadow-cyan/20 hover:shadow-cyan/40 hover:scale-[1.02] active:scale-[0.98] border border-cyan/40 glow-cyan-sm transition-all duration-300 whitespace-nowrap',
  secondary:
    'bg-navy text-cyan hover:bg-navy-light border border-cyan/40 shadow-sm transition-all duration-300 whitespace-nowrap',
  outline:
    'border border-cyan/40 text-light-text bg-navy/80 hover:border-cyan hover:text-cyan hover:bg-navy transition-all duration-300 backdrop-blur-md whitespace-nowrap',
  ghost:
    'text-secondary-text hover:text-cyan hover:bg-navy/50 transition-all duration-300 whitespace-nowrap',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs font-semibold rounded-lg',
  md: 'px-6 py-3 text-sm font-bold rounded-xl',
  lg: 'px-8 py-3.5 text-base font-extrabold rounded-2xl',
};

export default function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    loading = false,
    children,
    className = '',
  } = props;

  const baseStyles =
    'inline-flex items-center justify-center gap-2.5 cursor-pointer transition-all duration-200 select-none whitespace-nowrap shrink-0';
  const combined = `${baseStyles} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ('as' in props && props.as === 'link') {
    const { to, ...rest } = props as AsLink;
    return (
      <Link to={to} className={combined} {...rest}>
        {children}
      </Link>
    );
  }

  const {
    as: _as,
    variant: _v,
    size: _s,
    loading: _l,
    ...buttonProps
  } = props as AsButton;

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      disabled={loading || buttonProps.disabled}
      className={`${combined} ${loading || buttonProps.disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
      {...buttonProps}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" />}
      {children}
    </motion.button>
  );
}
