import { cn } from '@/lib/utils';
import { type ClassValue } from 'clsx';
import { ReactNode } from 'react';

type SectionProps = {
  children: Readonly<ReactNode>;
  className?: Readonly<ClassValue>;
};

export function SectionHeading({ children, className }: SectionProps) {
  return (
    <h2
      className={cn(
        'sticky top-0 mt-[10%] mb-8 text-6xl font-black',
        className
      )}
    >
      {children}
    </h2>
  );
}

export function SectionParagraph({ children, className }: SectionProps) {
  return <p className={cn('mb-6 text-lg leading-8', className)}>{children}</p>;
}

export function Section({
  children,
  className,
  id,
}: SectionProps & { id: string }) {
  return (
    <article id={id} className={cn(className)}>
      {children}
    </article>
  );
}
