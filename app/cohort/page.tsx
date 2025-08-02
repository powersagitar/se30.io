import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { GitHubIcon, LinkedInIcon } from '@/components/ui/icons';
import { PageHeader, PageSubtitle, PageTitle } from '@/components/ui/page';
import {
  Section,
  SectionHeader,
  SectionHeading,
} from '@/components/ui/section';
import { profiles } from '@/data/profiles';
import { enableOurCohort } from '@/flags';
import { getAvatarFromGitHub } from '@/lib/profiles/avatars';
import { ExternalLink, Mail } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function Cohort() {
  if (!(await enableOurCohort())) {
    notFound();
  }

  profiles.sort((a, b) => {
    const lastNameA = a.lastName.toLowerCase();
    const lastNameB = b.lastName.toLowerCase();

    const firstNameA = a.firstName.toLowerCase();
    const firstNameB = b.firstName.toLowerCase();

    return lastNameA < lastNameB
      ? -1
      : lastNameA > lastNameB
        ? 1
        : firstNameA < firstNameB
          ? -1
          : firstNameA > firstNameB
            ? 1
            : 0;
  });

  return (
    <article>
      <PageHeader>
        <PageTitle>Our Cohort</PageTitle>
        <PageSubtitle>UWaterloo Software Engineering &apos;30</PageSubtitle>
      </PageHeader>

      <Section>
        <SectionHeader>
          <SectionHeading id="us">Us</SectionHeading>
        </SectionHeader>

        <div className="grid grid-cols-3 gap-6">
          {profiles.map((profile, idx) => (
            <Card
              key={'cohort-profiles-card-' + idx}
              className="h-full gap-4 p-6"
            >
              <Avatar className="mx-auto h-auto w-1/3">
                <AvatarImage
                  src={
                    profile.github
                      ? getAvatarFromGitHub(profile.github).toString()
                      : ''
                  }
                  alt={`Profile picture of ${profile.firstName} ${profile.lastName}.`}
                />
                <AvatarFallback className="aspect-square text-center text-lg font-medium uppercase">
                  {profile.firstName}
                  <br />
                  {profile.lastName}
                </AvatarFallback>
              </Avatar>

              <h3 className="text-accent-foreground mt-4 text-lg font-semibold uppercase">
                {profile.firstName} {profile.lastName}
              </h3>

              {profile.bio && (
                <p className="bg-muted rounded-lg border p-4">
                  <i>{profile.bio}</i>
                </p>
              )}

              <dl className="grid grid-cols-[2.25rem_1fr] gap-y-2">
                {profile.email && (
                  <>
                    <dt className="content-center">
                      <Mail className="h-[90%]" />
                      <span className="sr-only">Email</span>
                    </dt>
                    <dd>
                      <Link href={'mailto:' + profile.email}>
                        {profile.email}
                      </Link>
                    </dd>
                  </>
                )}

                {profile.portfolio && (
                  <>
                    <dt className="content-center">
                      <ExternalLink className="h-[90%]" />
                      <span className="sr-only">Portfolio</span>
                    </dt>
                    <dd>
                      <Link href={profile.portfolio.href.toString()}>
                        {profile.portfolio.displayName}
                      </Link>
                    </dd>
                  </>
                )}

                {profile.github && (
                  <>
                    <dt className="content-center">
                      <GitHubIcon className="h-[90%]" />
                      <span className="sr-only">GitHub</span>
                    </dt>
                    <dd>
                      <Link href={'https://github.com/' + profile.github}>
                        {profile.github}
                      </Link>
                    </dd>
                  </>
                )}

                {profile.linkedin && (
                  <>
                    <dt className="content-center">
                      <LinkedInIcon className="h-[90%]" />
                      <span className="sr-only">LinkedIn</span>
                    </dt>
                    <dd>
                      <Link
                        href={'https://www.linkedin.com/in/' + profile.linkedin}
                      >
                        {profile.linkedin}
                      </Link>
                    </dd>
                  </>
                )}
              </dl>
            </Card>
          ))}
        </div>
      </Section>
    </article>
  );
}
