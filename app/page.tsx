import ProfileCarousel from '@/components/home/profile-carousel';
import { Button } from '@/components/ui/button';
import { PageHeader, PageSubtitle, PageTitle } from '@/components/ui/page';
import {
  Section,
  SectionHeader,
  SectionHeading,
  SectionParagraph,
} from '@/components/ui/section';
import { dataCollectionInProgress, enableOurCohort } from '@/flags';
import Link from 'next/link';

export default async function Home() {
  return (
    <article>
      <PageHeader>
        <PageTitle>
          Software Engineering
          <br />
          2030 Class Profile
        </PageTitle>

        <PageSubtitle>University of Waterloo</PageSubtitle>
      </PageHeader>

      <Section>
        <SectionHeader>
          <SectionHeading id="our-program">Our Program</SectionHeading>
        </SectionHeader>

        <SectionParagraph>
          Software Engineering at the University of Waterloo is an
          interdisciplinary program supported by both the Faculty of Mathematics
          and the Faculty of Engineering. Students spend eight academic
          semesters in school with similar schedules and gain work experience
          through six co-op terms. Upon completing their 4⅔–year journey,
          graduates are awarded a Bachelor of Software Engineering (BSE) degree.
        </SectionParagraph>

        <SectionParagraph>
          Software Engineering is often compared to Computer Science and is
          considered its more structured, engineering-oriented counterpart.
          Prospective students may wonder if Software Engineering is the right
          fit for them and if they will enjoy the program environment. This
          profile aims to showcase who the SE class of 2030 students are, what
          they have accomplished, and what future students can expect from their
          experience in the program.
        </SectionParagraph>

        <SectionParagraph>
          This profile is not affiliated with the Software Engineering program
          or the University of Waterloo.
        </SectionParagraph>
      </Section>

      {(await enableOurCohort()) && (
        <Section>
          <SectionHeader>
            <SectionHeading id="our-cohort">Our Cohort</SectionHeading>
          </SectionHeader>

          <ProfileCarousel />

          <Button asChild>
            <Link href="/cohort">Find Every Single One of Us</Link>
          </Button>
        </Section>
      )}

      <Section>
        <SectionHeader>
          <SectionHeading id="class-profile">Class Profile</SectionHeading>
        </SectionHeader>

        {(await dataCollectionInProgress()) ? (
          <>
            <SectionParagraph>Data collection in progress.</SectionParagraph>
            <SectionParagraph>
              Please check either Piazza, Discord, or Instagram for link to
              survey.
            </SectionParagraph>
            <SectionParagraph>
              <strong>
                Only SE2030 students will have access to complete the survey.
              </strong>
            </SectionParagraph>
          </>
        ) : (
          <>
            <SectionParagraph>
              Data collection hasn't started or has been completed.
            </SectionParagraph>
            <SectionParagraph>
              Please check the SE2030 Discord server for more details.
            </SectionParagraph>
          </>
        )}
      </Section>
    </article>
  );
}
