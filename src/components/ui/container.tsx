import React from 'react';
import { cn } from '@/lib/utils';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'sm' | 'lg' | 'xl' | 'full';
  as?: React.ElementType;
};

/**
 * Container component for consistent width constraints across the site
 * Sizes:
 * - default: max-w-content (72rem / 1152px)
 * - sm: max-w-content-sm (48rem / 768px)
 * - lg: max-w-content-lg (80rem / 1280px)
 * - xl: max-w-content-xl (96rem / 1536px)
 * - full: w-full (no max-width)
 */
export function Container({
  children,
  className,
  size = 'default',
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component
      className={cn(
        'w-full mx-auto px-4 sm:px-6 lg:px-8',
        {
          'max-w-content': size === 'default',
          'max-w-content-sm': size === 'sm',
          'max-w-content-lg': size === 'lg',
          'max-w-content-xl': size === 'xl',
          'max-w-none': size === 'full',
        },
        className
      )}
    >
      {children}
    </Component>
  );
} 