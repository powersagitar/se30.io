import {
  Section,
  SectionHeading,
  SectionParagraph,
} from '@/components/ui/section';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <article>
        <header className="flex min-h-screen flex-col">
          <hgroup className="mt-auto mb-10 flex flex-col gap-8">
            <h1 className="text-5xl font-black sm:text-9xl">
              Software Engineering
              <br />
              2030 Class Profile
            </h1>

            <p className="text-accent-foreground text-3xl font-extrabold sm:text-5xl">
              University of Waterloo
            </p>
          </hgroup>
        </header>

        <Section>
          <header>
            <SectionHeading id="our-program">Our Program</SectionHeading>
          </header>

          <SectionParagraph>
            Software Engineering at the University of Waterloo is an
            interdisciplinary program supported by both the Faculty of
            Mathematics and the Faculty of Engineering. Students spend eight
            academic semesters in school with similar schedules and gain work
            experience through six co-op terms. Upon completing their 4 ⅔-year
            journey, graduates are awarded a Bachelor of Software Engineering
            (BSE) degree.
          </SectionParagraph>

          <SectionParagraph>
            Software Engineering is often compared to Computer Science and is
            considered its more structured, engineering-oriented counterpart.
            Prospective students may wonder if Software Engineering is the right
            fit for them and if they will enjoy the program environment. This
            profile aims to showcase who the SE class of 2030 students are, what
            they have accomplished, and what future students can expect from
            their experience in the program.
          </SectionParagraph>

          <SectionParagraph>
            This profile is not affiliated with the Software Engineering program
            or the University of Waterloo.
          </SectionParagraph>
        </Section>

        <Section>
          <header>
            <SectionHeading id="class-profile">Class Profile</SectionHeading>
          </header>

          <SectionParagraph>Data yet to be collected.</SectionParagraph>

          <SectionParagraph>
            If you wish to contribute to the survey, please check out the{' '}
            <Link
              href="https://github.com/powersagitar/se30.io/discussions/13"
              className="underline underline-offset-4"
            >
              discussion
            </Link>
            .
          </SectionParagraph>
        </Section>
      </article>
    </main>
  );
}
