import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './container';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  containerSize?: 'default' | 'sm' | 'lg' | 'xl' | 'full';
  spacing?: 'default' | 'sm' | 'lg' | 'none';
  as?: React.ElementType;
  id?: string;
  withContainer?: boolean;
};

/**
 * Section component for consistent vertical spacing and optional container
 * Spacing:
 * - default: py-section (4rem / 64px)
 * - sm: py-section-sm (2rem / 32px)
 * - lg: py-section-lg (8rem / 128px)
 * - none: no padding
 */
export function Section({
  children,
  className,
  containerClassName,
  containerSize = 'default',
  spacing = 'default',
  as: Component = 'section',
  id,
  withContainer = true,
}: SectionProps) {
  const content = withContainer ? (
    <Container size={containerSize} className={containerClassName}>
      {children}
    </Container>
  ) : (
    children
  );

  return (
    <Component
      id={id}
      className={cn(
        {
          'py-section': spacing === 'default',
          'py-section-sm': spacing === 'sm',
          'py-section-lg': spacing === 'lg',
          'py-0': spacing === 'none',
        },
        className
      )}
    >
      {content}
    </Component>
  );
} 