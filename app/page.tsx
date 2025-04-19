import {
  Section,
  SectionHeading,
  SectionParagraph,
} from '@/components/ui/section';

export default function Home() {
  return (
    <main>
      <article>
        <header className="flex min-h-screen flex-col">
          <hgroup className="mt-auto mb-10 flex flex-col gap-8">
            <h1 className="text-9xl font-black">
              Software Engineering
              <br />
              2030 Class Profile
            </h1>

            <p className="text-accent-foreground text-5xl font-extrabold">
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
            interdisciplinary program supported by both teh Faculty of
            Mathematics and the Faculty of Engineering. Students spend 8
            semesters in school with similar schedules and gain work experience
            over 6 co-op terms. Undergraduates in the Software Engineering
            program are awarded a Bachelor of Software Engineering (BSE) degree
            at the end of their 4 ⅔-year journey.
          </SectionParagraph>

          <SectionParagraph>
            Software Engineering is commonly compared to Computer Science, and
            is often seen as its more-constrained, engineering-oriented
            counterpart. Prospective students may wonder whether Software
            Engineering is the right fit for them, and whether they will enjoy
            the environment. This profile attempts to showcase who SE 2030
            students are, what they have done, and their journey through
            university will be like.
          </SectionParagraph>

          <SectionParagraph>
            This profile is not affiliated with the Software Engineering program
            or the University of Waterloo in any way.
          </SectionParagraph>
        </Section>
      </article>
    </main>
  );
}
