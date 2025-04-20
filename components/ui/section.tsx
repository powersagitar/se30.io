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
      className={cn('mt-[10%] mb-8 block text-6xl font-black', className)}
    >
      <span className="text-muted-foreground"># </span>
      <h2 id={id} className="inline">
        {children}
      </h2>
    </Link>
  );
}

export function SectionParagraph({ children, className }: SectionProps) {
  return <p className={cn('mb-6 text-lg leading-8', className)}>{children}</p>;
}

export function Section({ children, className }: SectionProps) {
  return <article className={cn(className)}>{children}</article>;
}
