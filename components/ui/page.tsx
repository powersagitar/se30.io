import { ReactNode } from 'react';

type PageProps = {
  children: Readonly<ReactNode>;
};

export function PageHeader({ children }: PageProps) {
  return (
    <header className="flex min-h-screen flex-col">
      <hgroup className="mt-auto mb-10 flex flex-col gap-8">{children}</hgroup>
    </header>
  );
}

export function PageTitle({ children }: PageProps) {
  return <h1 className="text-5xl font-black sm:text-9xl">{children}</h1>;
}

export function PageSubtitle({ children }: PageProps) {
  return (
    <p className="text-accent-foreground text-3xl font-extrabold sm:text-5xl">
      {children}
    </p>
  );
}
