import { flag } from 'flags/next';

export const enableOurCohort = flag({
  key: 'display-section-our-cohort',
  decide() {
    return process.env.NODE_ENV === 'development';
  },
});
