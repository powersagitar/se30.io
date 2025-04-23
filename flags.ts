import { flag } from 'flags/next';

export const displaySectionOurCohort = flag({
  key: 'display-section-our-cohort',
  decide() {
    return process.env.NODE_ENV === 'development';
  },
});
