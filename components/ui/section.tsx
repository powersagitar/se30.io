import { cn } from '@/lib/utils';
import { type ClassValue } from 'clsx';
import Link from 'next/link';
import { ReactNode } from 'react';

type SectionProps = {
  children: Readonly<ReactNode>;
  className?: Readonly<ClassValue>;
};

export function SectionHeading({
  children,
  className,
  id,
}: SectionProps & { id: string }) {
  return (
    <Link
      href={`#${id}`}
      className={cn(
        'mb-6 block text-4xl font-black sm:mb-8 sm:text-6xl',
        className
      )}
    >
      <span className="text-muted-foreground"># </span>
      <h2 id={id} className="inline">
        {children}
      </h2>
    </Link>
  );
}

export function SectionParagraph({ children, className }: SectionProps) {
  return (
    <p className={cn('mb-5 max-w-4xl text-lg leading-8 sm:mb-6', className)}>
      {children}
    </p>
  );
}

export function Section({ children, className }: SectionProps) {
  return <article className={cn('mt-[10%]', className)}>{children}</article>;
}
