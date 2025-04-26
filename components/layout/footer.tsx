import Link from 'next/link';
import { Button } from '../ui/button';
import { GitHubIcon } from '../ui/icons';
import { Separator } from '../ui/separator';

export default function Footer() {
  return (
    <footer className="text-background bg-foreground dark:text-foreground dark:bg-muted -mx-6 mt-[10%] p-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between">
          <div>
            <p>
              This profile is not affiliated with the Software Engineering
              program or the University of Waterloo.
            </p>

            <p>
              If you have any questions or concerns, please email{' '}
              <Link
                href="mailto:contact@se30.io"
                className="underline underline-offset-4"
              >
                contact@se30.io
              </Link>
              .
            </p>
          </div>

          <div className="content-center">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/powersagitar/se30.io">
                <GitHubIcon />
              </Link>
            </Button>
          </div>
        </div>

        <Separator className="bg-muted-foreground my-2" />

        <p>
          Copyright &copy; {new Date().getUTCFullYear()} Cohort of SE &apos;30.{' '}
          <Link
            href="https://github.com/powersagitar/se30.io"
            className="underline underline-offset-4"
          >
            Some rights reserved.
          </Link>
        </p>
      </div>
    </footer>
  );
}
