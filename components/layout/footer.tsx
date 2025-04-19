import Link from 'next/link';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

export default function Footer() {
  return (
    <footer className="text-background bg-foreground dark:text-foreground dark:bg-muted -mx-6 mt-[10%] p-6">
      <div className="flex justify-between">
        <div>
          <p>
            This profile is not affiliated with the Software Engineering program
            or the University of Waterloo in any way.
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
    </footer>
  );
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-github-icon lucide-github"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
