import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ComponentPropsWithRef } from 'react';

export function SectionHeading({
  className,
  id,
  ...props
}: ComponentPropsWithRef<'h2'>) {
  return (
    <Link
      href={`#${id}`}
      className={cn(
        'mb-6 block text-4xl font-black sm:mb-8 sm:text-6xl',
        className
      )}
    >
      <span className="text-muted-foreground"># </span>
      <h2 id={id} className="inline" {...props} />
    </Link>
  );
}

export function SectionParagraph({
  className,
  ...props
}: ComponentPropsWithRef<'p'>) {
  return (
    <p className={cn('mb-5 text-lg leading-8 sm:mb-6', className)} {...props} />
  );
}

export function Section({
  className,
  ...props
}: ComponentPropsWithRef<'article'>) {
  return <article className={cn('mt-[10%]', className)} {...props} />;
}
