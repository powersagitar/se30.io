import { flag } from 'flags/next';

export const enableOurCohort = flag({
  key: 'display-section-our-cohort',
  decide() {
    return process.env.NODE_ENV === 'development';
  },
});

export const dataCollectionInProgress = flag({
  key: 'data-collection-start',
  decide() {
    return (
      new Date() >= new Date('2025-08-28T10:00:00-0500') &&
      new Date() <= new Date('2025-09-13T23:59:59-0500')
    );
  },
});
