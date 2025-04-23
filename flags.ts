import { flag } from 'flags/next';

export const displaySectionOurCohort = flag({
  key: 'display-section-our-cohort',
  decide() {
    if (process.env.NODE_ENV === 'development') {
      return true;
    } else {
      return false;
    }
  },
});
